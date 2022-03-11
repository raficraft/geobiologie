import React, { useState, useEffect, useContext } from "react";
import { Star } from "../../../../../assets/icons/Icon_svg";
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
          <Star id={`star_${key}_${i}`}></Star>
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
  };

  function createPaginate() {
    const paginate = [];

    const count = Math.ceil(sortCollection.length / nbReviewPerPage);

    for (let idx = 0; idx < count; idx++) {
      let pageNumber = idx + 1;
      paginate.push(
        <button
          key={idx}
          onClick={(e) => {
            goToPage(idx, pageNumber);
          }}
        >
          {pageNumber}
        </button>
      );
    }

    return paginate;
  }

  function goToPage(startIndex, pageNumber) {
    //shallow copy
    const dataRow = JSON.parse(JSON.stringify(sortCollection));
    const start = startIndex === 0 ? 0 : startIndex * parseInt(nbReviewPerPage);
    const end = pageNumber * parseInt(nbReviewPerPage);
    setCurrentCollectionForThisPage(dataRow.slice(start, end));
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
      }
    } catch (error) {
      alert(error);
    }
  }, [nbReviewPerPage]);

  return (
    <>
      {" "}
      {loading ? (
        <p>...Loading</p>
      ) : (
        <section className={S.list_review} key="listReview">
          <h2>Ils ont donné leurs avis.</h2>
          <header>
            <div>
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
          {listUserReview()}

          <div className={S.paginate}>{createPaginate(nbReviewPerPage)}</div>

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
