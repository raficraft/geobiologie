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
  const [nbReviewPerPage, setNbReviewPerPage] = useState(2);
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
    console.log(startIndex, pageNumber);
    const dataRow = JSON.parse(JSON.stringify(sortCollection));

    const start = startIndex === 0 ? 0 : startIndex * parseInt(nbReviewPerPage);
    const end = pageNumber * parseInt(nbReviewPerPage);

    console.log("start", start);
    console.log("end", end);
    console.log("input", sortCollection);
    console.log("shallow copy", dataRow);
    console.log(dataRow.slice(start, end));

    setCurrentCollectionForThisPage(dataRow.slice(start, end));
  }

  //Get all review validate in firebase user_review collection

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await getDocumentByQuery("user_review", "active", true);
      if (res) {
        setSortCollection(res);
        const shallowCopy = JSON.parse(JSON.stringify(res));
        const forThisPage = shallowCopy.splice(0, nbReviewPerPage);
        setCurrentCollectionForThisPage(forThisPage);
        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  }, [nbReviewPerPage, nbReviewPerPage]);

  return (
    <>
      {" "}
      {loading ? (
        <p>...Loading</p>
      ) : (
        <section
          className={S.list_review}
          onChange={(e) => {
            handleSelectChange(e);
          }}
          key="listReview"
        >
          <h2>Ils ont donné leurs avis.</h2>
          <header>
            <label>Nombre d'avis afficher : </label>
            <select defaultValue={nbReviewPerPage}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </header>
          {listUserReview()}

          <div>{createPaginate(nbReviewPerPage)}</div>

          <footer>
            <button
              className="btn_primary bg_blue"
              onClick={() => {
                openModal("embed");
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
