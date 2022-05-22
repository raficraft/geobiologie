import React, { useState, useEffect, useContext } from "react";
import { Star } from "../../../../assets/icons/Icon_svg";
import Paginate from "../../../../engine/component/paginate/Paginate";
import { SubDotMenuContext } from "../../../../engine/context/subDotMenu/SubdotMenu";
import useFirestore from "../../../../engine/hooks/firestore/useFirestore";
import { useClickOutside } from "../../../../engine/hooks/useClickOutside";
import { convertTimestamp } from "../../../../engine/utils/utils";

import S from "./Handle_review.module.scss";

export default function Handle_review(props) {
  const { active } = { ...props };
  const [loading, setLoading] = useState(true);
  const [currentCollection, , , , getDocumentByQuery] = useFirestore(
    "user_review",
    {}
  );
  const [listCollection, setlistCollection] = useState();
  const [currentCollectionForThisPage, setCurrentCollectionForThisPage] =
    useState([]);
  const [nbReviewPerPage, setNbReviewPerPage] = useState(6);
  const [nbPage, setNbPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  function handleSelectChange(e) {
    setNbReviewPerPage(e.target.value);
  }

  function showUserReview(list) {
    return currentCollectionForThisPage.map((el, idx) => {
      return <Review key={el.id} review={el} {...props}></Review>;
    });
  }

  function goToPage(startIndex, pageNumber) {
    //shallow copy
    const dataRow = JSON.parse(JSON.stringify(listCollection));
    const start = startIndex === 0 ? 0 : startIndex * parseInt(nbReviewPerPage);
    const end = pageNumber * parseInt(nbReviewPerPage);

    console.log("start", start, "end", end);
    setCurrentCollectionForThisPage(dataRow.slice(start, end));
    setCurrentPage(pageNumber);
  }

  useEffect(async () => {
    async function callApi() {
      console.log("What", currentCollection);
      setLoading(true);
      try {
        const res = await getDocumentByQuery("user_review", "active", active);
        const shallowCopy = JSON.parse(JSON.stringify(res));
        const forThisPage = shallowCopy.splice(0, nbReviewPerPage);
        if (res) {
          setlistCollection(res);
          setCurrentCollectionForThisPage(forThisPage);
          setLoading(false);
        }
      } catch (error) {
        alert(error);
      }
    }

    return callApi();
  }, [currentCollection, nbReviewPerPage]);

  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : !loading && listCollection.length > 0 ? (
        <>
          <div className={S.content_review}>
            <div className={S.select}>
              <label>Trier par : </label>
              <select
                defaultValue="5"
                onChange={(e) => {
                  handleSelectChange(e);
                }}
              >
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="20">20</option>
              </select>
              <p> Avis</p>
            </div>
            <p>{Object.keys(listCollection).length} avis.</p>
          </div>
          <div class={S.paginate}>
            <Paginate
              perPage={nbReviewPerPage}
              collectionLength={listCollection.length}
              currentPage={currentPage}
              goToPage={goToPage}
              nbPage={nbPage}
              limit={[4, 2]}
            ></Paginate>
          </div>
          {showUserReview()}
        </>
      ) : (
        <p>Aucun nouvelle a valider</p>
      )}
    </>
  );
}

function Review({ review, active }) {
  const [, setDocument, , delete_doc, getDocumentByQuery] = useFirestore(
    "user_review",
    {}
  );

  const date = convertTimestamp(review.createAt);
  const [showDotMenu, setShowDotMenu, refOutsideClick] = useClickOutside(false);
  const { isSub, setIsSub, refSub } = useContext(SubDotMenuContext);

  function getRating(count) {
    const rate = [];
    for (let i = 0; i < count; i++) {
      rate.push(
        <span>
          <Star></Star>
        </span>
      );
    }
    return rate;
  }

  function toggle_dotMenu(e, toggle) {
    !isSub && setShowDotMenu(toggle);
  }

  function toggle_subMenu(e, toggle) {
    setIsSub(toggle);
  }

  //Handle Click

  function delReview() {
    delete_doc("user_review", review.id);
  }
  function setReview(review) {
    const payload = { ...review, active: !active };
    setDocument("user_review", payload);
  }

  useEffect(() => {
    setIsSub(false);
  }, []);
  return (
    <div
      className={S.wrapper}
      onMouseOver={(e) => toggle_dotMenu(e, true)}
      onMouseLeave={(e) => toggle_dotMenu(e, false)}
    >
      <div className="dotMenu_container">
        {showDotMenu && (
          <span
            className={`dotMenu ${S.dotMenu}`}
            onClick={(e) => {
              toggle_subMenu(e, true);
            }}
            ref={refOutsideClick}
          >
            <span className={`dotMenu_item dot_left`}></span>
            <span className={`dotMenu_item dot_right`}></span>
            {isSub && (
              <div className="dotMenu_sub" ref={refSub}>
                <button onClick={() => delReview()}>Supprimer</button>
                <button onClick={() => setReview(review)}>
                  {active === true ? "Désactiver" : "Activer"}
                </button>
              </div>
            )}
          </span>
        )}
      </div>

      <div className={S.content}>
        <p className={S.item_rate}>{getRating(review.rate)}</p>
        <p className={S.review}>{review.comment}</p>
        <p className={S.review}>{review.name}</p>
        <p className={S.date}>{date}</p>
      </div>
    </div>
  );
}
