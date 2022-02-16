import Link from "next/link";
import { Home_icon } from "../../../assets/icons/Icon_svg";

import useMediaQuery from "../../hooks/useMediaQueries";
import Navigation from "../navigation/Navigation";
import Hamburger_menu from "./hamburger_menu/Hamburger_menu";

import S from "./Header.module.scss";
import Style_nav from "../navigation/Nav_top.module.scss";

function Header() {
  const isMobil = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px)");
  //Conponenet
  return (
    <header className={`${S.wrapper}`}>
      {/* Header Content */}
      <div className={`${S.content} primary_content`}>
        {/* Home Button */}
        <Link href="/" className={S.home_button}>
          <a className={S.home_button}>
            <Home_icon />
          </a>
        </Link>

        {isTablet && <Navigation css={Style_nav} />}

        {isMobil && (
          <div className={S.nav_right}>
            <Hamburger_menu />
          </div>
        )}
      </div>
      {/* Header Content END*/}
    </header>
  );
}

export default Header;
