import React from "react";
import scss from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <header className={scss.headerWrapper}>
      <div className={scss.links}>
        <Link to="/" className={scss.logo}>
          <img src="/images/header/Lang.png" alt="logo" />
        </Link>
      </div>
      <div></div>
      <select className={scss.select}>
        <option>{t("russ")}</option>
        <option>{t("eng")}</option>
      </select>
      <Link to="/dashboard" className={scss.sign}>
        {t("login")}
      </Link>

      <div className={scss.btn}>
        <Link to="/login">
          <button className={scss.register}>{t("reg")}</button>
        </Link>
      </div>
    </header>
  );
}
export default Header;
