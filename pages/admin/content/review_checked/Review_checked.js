import React from "react";
import Handle_review from "../../component/handle_review/Handle_review";

import S from "./review_checked.module.scss";

export default function Review_checked() {
  return (
    <div>
      <h1>CHECEKD REVIEW</h1>
      <Handle_review active={true}></Handle_review>
    </div>
  );
}
