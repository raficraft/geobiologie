import { collection } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import {
  ArrowLeft,
  ArrowRight,
  FirstPage,
  LastPage,
  Star,
} from "../../../../../assets/icons/Icon_svg";
import { ModalContext } from "../../../../context/modal/ModalProvider";
import useFirestore from "../../../../hooks/firestore/useFirestore";

import S from "./List_review.module.scss";

export default function List_review() {
  const { openModal } = useContext(ModalContext);
  const [, , , , getDocumentByQuery] = useFirestore("user_review", {});
  const [sortCollection, setSortCollection] = useState();
  const [nbPage, setNbPage] = useState(1);
  const [nbReviewPerPage, setNbReviewPerPage] = useState(6);
  const [currentCollectionForThisPage, setCurrentCollectionForThisPage] =
    useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  function listUserReview(list) {
    return currentCollectionForThisPage.map((el, idx) => {
      return (
        <>
          <div className={S.list_review_item} key={`listReview_${el.id}`}>
            <p className={S.item_rate}>{getRating(el.rate, el.id)}</p>
            <p className={S.item_comment}>{el.comment}</p>
            <p className={S.item_name}>- {el.name}</p>
          </div>
        </>
      );
    });
  }

  function getRating(count, key) {
    const rate = [];
    for (let i = 0; i < count; i++) {
      rate.push(
        <span key={`star_${key}_${i}`}>
          <Star key={`starKey_${key}_${i}`}></Star>
        </span>
      );
    }
    return rate;
  }

  const handleSelectChange = (e) => {
    //shallow copy
    let dataRow = JSON.parse(JSON.stringify(sortCollection));
    setNbReviewPerPage(e.target.value);
    setCurrentCollectionForThisPage(dataRow.slice(0, parseInt(e.target.value)));
    const count = sortCollection.length / e.target.value;
    setNbPage(Math.ceil(count));
    console.log("before jump to currentPage", currentPage);
    goToPage(0, currentPage);
  };

  function goToPage(startIndex, pageNumber) {
    //shallow copy
    const dataRow = JSON.parse(JSON.stringify(sortCollection));
    const start = startIndex === 0 ? 0 : startIndex * parseInt(nbReviewPerPage);
    const end = pageNumber * parseInt(nbReviewPerPage);

    console.log("start", start, "end", end);
    setCurrentCollectionForThisPage(dataRow.slice(start, end));
    setCurrentPage(pageNumber);
  }

  //Get all review validate in firebase user_review collection

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await getDocumentByQuery("user_review", "active", true);
      if (res) {
        setSortCollection(res);
        //shallowCopy
        const shallowCopy = JSON.parse(JSON.stringify(res));
        const forThisPage = shallowCopy.splice(0, nbReviewPerPage);
        setCurrentCollectionForThisPage(forThisPage);
        setLoading(false);
        goToPage(0, currentPage);
      }
    } catch (error) {
      console.log(error);
    }
  }, [nbReviewPerPage]);

  return (
    <>
      {loading ? (
        <p>...Loading</p>
      ) : (
        <section className={S.list_review} key="listReview">
          <h2>Ils ont donné leurs avis.</h2>
          <div className={S.paginate_container}>
            <header className={S.paginate_header}>
              <div className={S.bloc_select}>
                <label>Nombre d'avis afficher : </label>
                <select
                  defaultValue={nbReviewPerPage}
                  onChange={(e) => {
                    handleSelectChange(e);
                  }}
                >
                  <option value="6">6</option>
                  <option value="12">12</option>
                  <option value="20">20</option>
                </select>
              </div>

              <p>il y à {sortCollection.length} avis.</p>
            </header>

            <div className={S.paginate}>
              <Paginate
                perPage={nbReviewPerPage}
                collectionLength={sortCollection.length}
                currentPage={currentPage}
                goToPage={goToPage}
                nbPage={nbPage}
                limit={[4, 2]}
              ></Paginate>
            </div>
          </div>
          {listUserReview()}

          <div className={`${S.paginate_container} ${S.pa3}`}>
            <header className={S.paginate_header}>
              <div className={S.bloc_select}>
                <label>Nombre d'avis afficher : </label>
                <select
                  defaultValue={nbReviewPerPage}
                  onChange={(e) => {
                    handleSelectChange(e);
                  }}
                >
                  <option value="6">6</option>
                  <option value="12">12</option>
                  <option value="20">20</option>
                </select>
              </div>

              <p>il y à {sortCollection.length} avis.</p>
            </header>

            <div className={S.paginate}>
              <Paginate
                perPage={nbReviewPerPage}
                collectionLength={sortCollection.length}
                currentPage={currentPage}
                goToPage={goToPage}
                nbPage={nbPage}
                limit={[4, 2]}
                keyPrefix="secondaryPaginate"
              ></Paginate>
            </div>
          </div>

          <footer>
            <button
              className="btn_primary bg_blue"
              onClick={() => {
                openModal("review");
              }}
            >
              Donner votre avis
            </button>
          </footer>
        </section>
      )}
    </>
  );
}

function Paginate({
  collectionLength,
  perPage,
  currentPage,
  goToPage,
  nbPage,
  limit = [3, 1],
  keyPrefix = "paginate",
}) {
  const paginate = [];
  let getDottedEnd = false;
  let getDottedStart = false;
  let addPrevButton = false;
  let addNextButton = false;
  let nbMax = limit[0] + limit[1];
  const count = Math.ceil(parseInt(collectionLength) / parseInt(perPage));
  const startLoop =
    currentPage > count - limit[0] ? count - limit[0] : currentPage;

  if (count > limit[0] + limit[1]) {
    for (let idx = startLoop; idx <= count; idx++) {
      if (!addPrevButton) {
        if (currentPage > 1) {
          paginate.push(
            <button onClick={() => goToPage(0, 1)}>
              <FirstPage></FirstPage>
            </button>
          );
        }
        if (currentPage > 2) {
          paginate.push(
            <button onClick={() => goToPage(idx - 2, pageNumber - 1)}>
              <ArrowLeft></ArrowLeft>
            </button>
          );
        }

        addPrevButton = true;
      }

      let pageNumber = idx;

      if (currentPage > 2) {
        if (!getDottedStart) {
          paginate.push(<button disabled="disabled">...</button>);
          getDottedStart = true;
        }
      }

      if (pageNumber < limit[0] + currentPage) {
        paginate.push(
          <PaginateButton
            key={`${keyPrefix}_${idx}`}
            currentPage={currentPage}
            pageNumber={pageNumber}
            goToPage={goToPage}
            nbPage={nbPage}
          ></PaginateButton>
        );
      } else if (pageNumber > limit[0] + currentPage) {
        if (!getDottedEnd) {
          paginate.push(<button disabled="disabled">...</button>);
          getDottedEnd = true;
        }
      }
    }
  } else {
    console.log("loop 2");
    for (let idx = 0; idx < count; idx++) {
      let pageNumber = idx + 1;
      paginate.push(
        <PaginateButton
          key={`paginate_${idx}`}
          currentPage={currentPage}
          pageNumber={pageNumber}
          goToPage={goToPage}
          nbPage={nbPage}
        ></PaginateButton>
      );
    }
  }

  if (!addNextButton) {
    if (currentPage < count - limit[0] + 1 && count > nbMax) {
      paginate.push(
        <>
          <button onClick={() => goToPage(currentPage, currentPage + 1)}>
            <ArrowRight></ArrowRight>
          </button>
          <button onClick={() => goToPage(count - 1, count)}>
            <LastPage></LastPage>
          </button>
        </>
      );
    }
    addNextButton = true;
  }

  console.log(paginate);
  return paginate;
}

function PaginateButton({ currentPage, pageNumber, goToPage }) {
  return (
    <button
      onClick={() => {
        goToPage(pageNumber - 1, pageNumber);
      }}
      data-current={currentPage === pageNumber ? true : false}
    >
      {pageNumber}
    </button>
  );
}
