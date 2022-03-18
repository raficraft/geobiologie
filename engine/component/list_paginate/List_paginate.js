import React from "react";
import Paginate from "../paginate/Paginate";

import useFirestore from "../../../../hooks/firestore/useFirestore";

/**HOC GET the data and hydrate children */

export default function List_paginate({ active, collection }) {
  const [, , , , getDocumentByQuery] = useFirestore("user_review", {});

  const [loading, setLoading] = useState(true);
  const [shallowCopy, setShallowCopy] = useState([]);

  const [nbPage, setNbPage] = useState(1);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [nbReviewPerPage, setNbReviewPerPage] = useState(6);

  function goToPage(startIndex, pageNumber) {
    //shallow copy
    const dataRow = JSON.parse(JSON.stringify(sortCollection));
    const start = startIndex === 0 ? 0 : startIndex * parseInt(nbReviewPerPage);
    const end = pageNumber * parseInt(nbReviewPerPage);

    setShallowCopy(dataRow.slice(start, end));
    setCurrentPageNumber(pageNumber);
  }

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await getDocumentByQuery("user_review", "active", true);
      if (res) {
        setInputCollection(res);
        //shallowCopy
        const shallowCopy_json = JSON.parse(JSON.stringify(res));
        const arraySplice = shallowCopy_json.splice(0, nbReviewPerPage);
        setShallowCopy(arraySplice);
        setLoading(false);
        goToPage(0, currentPageNumber);
      }
    } catch (error) {
      console.log(error);
    }
  }, [nbReviewPerPage]);
  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : !loading && listCollection.length > 0 ? (
        <>
          <div className={S.content_review}>
            <div className={S.select}>
              <label>Trier par : </label>
              <select defaultValue="5">
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <p> Avis</p>
            </div>
            <p>{Object.keys(listCollection).length} avis.</p>
          </div>
          <Paginate></Paginate>
          {/**Items */}
          <Paginate></Paginate>
        </>
      ) : (
        <p>Aucune donnée trouvé</p>
      )}
    </>
  );
}

function Items() {}
