import React, { useState, useEffect } from "react";

/**
 *
 * @param {String} axis
 * @param {*} param0
 * @returns
 */

export default function HR({ axis, size, css, crement, children }) {
  const [style, setStyle] = useState(css);

  function getCss() {
    const multiple = crement ? crement : 8;
    const splitAxis = css.margin.split(" ");

    if (splitAxis.length === 2) {
      const X = splitAxis[0] * multiple + "px";
      const Y = splitAxis[1] * multiple + "px";

      const initial = {
        margin: `${X} ${Y}`,
        display: "grid",
        placeItems: "center",
      };

      setStyle((S) => ({ ...S, ...initial }));
    }
    // } else if (splitAxis.length === 3 && splitAxis.length === 4) {
    //   const top = splitAxis[0] * multiple + "px";
    //   const right = splitAxis[1] * multiple + "px";
    //   const bottom = splitAxis[2] ? splitAxis[2] * multiple + "px" : 0;
    //   const left = splitAxis[3] ? splitAxis[3] * multiple + "px" : 0;

    //   return { margin: `${top} ${right} ${bottom} ${left}` };
    // }
  }

  useEffect(() => {
    getCss();
    console.log(style);
  }, []);

  return <span style={style}>{children}</span>;
}
