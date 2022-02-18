import React, { useState, useEffect, useContext } from "react";
import { Star } from "../../../../../assets/icons/Icon_svg";
import { ModalContext } from "../../../../context/modal/ModalProvider";
import useFirestore from "../../../../hooks/firestore/useFirestore";

import S from "./List_review.module.scss";

export default function List_review() {
  console.log(S);
  const [currentCollection, , , , getDocumentByQuery] = useFirestore(
    "user_review",
    {}
  );

  const { openModal } = useContext(ModalContext);

  const [reviewPerPage, setReviewPerPage] = useState(5);
  const [nbPage, setNbPage] = useState(1);
  const [listCollection, setlistCollection] = useState();
  const [loading, setLoading] = useState(true);

  function listUserReview(list) {
    console.log(listCollection);

    return listCollection.map((el, idx) => {
      return (
        <>
          <div className={S.list_review_item} key={idx}>
            <p className={S.item_rate}>{getRating(el.rate)}</p>
            <p className={S.item_comment}>{el.comment}</p>
            <p className={S.item_name}>- {el.name}</p>
          </div>
        </>
      );
    });
  }

  function getRating(count) {
    const rate = [];
    for (let i = 0; i < count; i++) {
      rate.push(<Star></Star>);
    }
    return rate;
  }

  //Get all review validate in firebase user_review collection

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await getDocumentByQuery("user_review", "active", true);
      setlistCollection(res);
      if (res) {
        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  }, [currentCollection]);

  console.log("render");
  return (
    <>
      {" "}
      {loading ? (
        <p>...Loading</p>
      ) : (
        <section className={S.list_review}>
          <h2>Ils ont donné leurs avis.</h2>
          <header>
            <label>Nombre d'avis afficher : </label>
            <select>
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </header>
          {listUserReview()}
          <button
            className="btn_primary bg_blue"
            onClick={() => {
              openModal("embed");
            }}
          >
            Donner votre avis
          </button>
        </section>
      )}
    </>
  );
}
