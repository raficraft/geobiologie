import React, { useState, useEffect, useContext } from "react";
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

  function showUserReview(list) {
    return listCollection.map((el, idx) => {
      return <Review key={el.id} review={el}></Review>;
    });
  }

  useEffect(() => {
    async function loadingReview() {
      setLoading(true);
      try {
        const res = await getDocumentByQuery("user_review", "active", active);
        setlistCollection(res);
        if (res) {
          setLoading(false);
        }
      } catch (error) {
        alert(error);
      }
    }

    return loadingReview;
  }, [currentCollection]);
  console.log("render handle review", loading);

  return <>{loading ? <p>Loading ...</p> : <>{showUserReview()}</>}</>;
}

function Review({ review, children }) {
  const date = convertTimestamp(review.createAt);

  const [showDotMenu, setShowDotMenu] = useState(false);
  const { isSub, setIsSub } = useContext(SubDotMenuContext);

  function toggle_dotMenu(e, toggle) {
    console.log(e);
    !isSub && setShowDotMenu(toggle);
  }

  return (
    <div
      className={S.wrapper}
      onMouseEnter={(e) => toggle_dotMenu(e, true)}
      onMouseLeave={(e) => toggle_dotMenu(e, false)}
    >
      <div className="dotMenu_container">
        {showDotMenu && <DotMenu></DotMenu>}
      </div>

      <div className={S.content}>
        <p>{review.comment}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

function DotMenu() {
  const { isSub, setIsSub, refOutsideClick } = useContext(SubDotMenuContext);
  function toggle_subMenu(e) {
    setIsSub(!isSub);
  }
  return (
    <span
      className={`dotMenu ${S.dotMenu}`}
      onClick={(e) => {
        toggle_subMenu(e);
      }}
    >
      <span className={`dotMenu_item dot_left`}></span>
      <span className={`dotMenu_item dot_right`}></span>
      {isSub && (
        <div className="dotMenu_sub" ref={refOutsideClick}>
          TOTO
        </div>
      )}
    </span>
  );
}
