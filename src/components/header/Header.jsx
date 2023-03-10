import React, { useState } from "react";
import scss from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setActive(false);
  };
  return (
    <header className={scss.headerWrapper}>
      <div className={scss.links}>
        <Link to="/" className={scss.logo}>
          <img src="/images/header/Lang.png" alt="logo" />
        </Link>
      </div>
      <div className={scss.dropdown}>
        <div className={scss.dropdown_select}>
          <span className={scss.select} onClick={() => setActive(!active)}>
            {language}
          </span>
        </div>
        <div className={scss.dropdown_list + " " + (active ? scss.active : "")}>
          <div className={scss.dropdown_list__item} onClick={() => changeLanguage("English")}>
            {t("eng")}
          </div>
          <div className={scss.dropdown_list__item} onClick={() => changeLanguage("Русский")}>
            {t("russ")}
          </div>
        </div>
      </div>
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
