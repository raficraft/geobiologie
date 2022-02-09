import React, { useState, useEffect, useContext } from "react";
import { SubDotMenuContext } from "../../../../engine/context/subDotMenu/SubdotMenu";
import useFirestore from "../../../../engine/hooks/firestore/useFirestore";
import { useClickOutside } from "../../../../engine/hooks/useClickOutside";
import { convertTimestamp } from "../../../../engine/utils/utils";

import S from "./Handle_review.module.scss";

export default function Handle_review(props) {
  console.log("handle_review COmponent");
  const { active } = { ...props };
  const [loading, setLoading] = useState(true);
  const [currentCollection, , , , getDocumentByQuery] = useFirestore(
    "user_review",
    {}
  );

  const [listCollection, setlistCollection] = useState();
  const [numberOfLinePerPage, setnumberOfLinePerPage] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [lenghtArrayReview, setLengthArrayReview] = useState([]);

  /**
   * @param {eventHTML} e
   * @param {number} index
   * @param {string} goTo
   */

  const goToPage = (e, startIndex, pageNumber) => {
    const start =
      startIndex === 0 ? 0 : startIndex * parseInt(numberOfLinePerPage);
    const end = pageNumber * parseInt(numberOfLinePerPage);
    setlistCollection(currentCollection.slice(start, end));
    setCurrentPage(startIndex + 1);
  };

  function createPaginate() {
    const paginate = [];
    for (let index = 0; index < pageNumber; index++) {
      let pageIdx = index + 1;
      paginate.push(
        <button
          className={`paginate_btn ${currentPage === pageIdx ? `active` : ""}`}
          onClick={(e) => {
            goToPage(e, index, pageIdx);
          }}
          key={index}
        >
          {pageIdx}
        </button>
      );
    }
    return paginate;
  }

  //internal component

  function showUserReview(list) {
    return listCollection.map((el, idx) => {
      return <Review key={el.id} review={el} {...props}></Review>;
    });
  }

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await getDocumentByQuery("user_review", "active", active);
      if (res) {
        setlistCollection(res.slice(0, numberOfLinePerPage));
        setLengthArrayReview(Object.keys(res).length);
        setPageNumber(() => {
          return Math.ceil(Object.keys(res).length / numberOfLinePerPage);
        });

        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  }, [currentCollection]);

  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <p>{Object.keys(currentCollection).length} avis.</p>
          {showUserReview()}
          <footer className={`paginate`}>{createPaginate(pageNumber)}</footer>
        </>
      )}
    </>
  );
}

function Review({ review, active }) {
  const date = convertTimestamp(review.createAt);

  const [showDotMenu, setShowDotMenu, refOutsideClick] = useClickOutside(false);
  const { isSub, setIsSub, refSub } = useContext(SubDotMenuContext);

  function toggle_dotMenu(e, toggle) {
    !isSub && setShowDotMenu(toggle);
  }

  function toggle_subMenu(e, toggle) {
    setIsSub(toggle);
  }

  //Handle Click

  function delReview() {}
  function handleActive_Review() {}

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
                <button onClick={() => handleActive_Review(!active)}>
                  {active === true ? "Désactiver" : "Activer"}
                </button>
              </div>
            )}
          </span>
        )}
      </div>

      <div className={S.content}>
        <p>{review.comment}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
