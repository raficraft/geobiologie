import React, { createContext, useState, useRef, useEffect } from "react";

export const SubDotMenuContext = createContext();

export default function SubDotMenuProvider({ children }) {
  const refOutsideClick = useRef(false);
  const refOutsideClick_snd = useRef(false);
  const [isSub, setIsSub] = useState(false);

  const handleClickOutside = (event) => {
    if (
      refOutsideClick.current &&
      !refOutsideClick.current.contains(event.target)
    ) {
      setIsSub(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [refOutsideClick]);

  return (
    <SubDotMenuContext.Provider value={{ isSub, setIsSub, refOutsideClick }}>
      {children}
    </SubDotMenuContext.Provider>
  );
}
