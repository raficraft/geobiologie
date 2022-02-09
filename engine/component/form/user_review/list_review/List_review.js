import React, { useState, useEffect } from "react";
import useFirestore from "../../../../hooks/firestore/useFirestore";

import S from "./List_review.module.scss";

export default function List_review() {
  const [currentCollection, , , , getDocumentByQuery] = useFirestore(
    "user_review",
    {}
  );

  const [listCollection, setlistCollection] = useState();
  const [loading, setLoading] = useState(true);

  function listUserReview(list) {
    console.log(listCollection);

    return listCollection.map((el, idx) => {
      return <p key={idx}>{el.comment}</p>;
    });
  }

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
  return <>{loading ? <p>...Loading</p> : listUserReview()}</>;
}
