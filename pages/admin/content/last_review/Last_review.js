import React from "react";
import Handle_review from "../../component/handle_review/Handle_review";

import S from "./Last_review.module.scss";

export default function Last_review() {
  return (
    <div className={S.wrapper}>
      <h1>Dernière avis à valider</h1>
      <Handle_review active={false}></Handle_review>
    </div>
  );
}
