import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import scss from "./Footer.module.scss";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className={scss.global}>
      <div className={scss.rash}>
        <img src="/images/footer/rash.png" alt="foto" />
      </div>
      <div className={scss.right}>
        <div className={scss.descrip}>
          <h1>{t("footer")}</h1>
          <div className={scss.fottext}>
            <p>{t("footer_text")}</p>
          </div>
          <div>
            <img className={scss.appl} src="/images/footer/apple.png" alt="logo" />
            <img src="/images/footer/google.png" alt="logo" />
          </div>
        </div>
      </div>
      <p className={scss.footer}>{t("footer_p")}</p>
      <div className={scss.reg}>
        <Link to="register">
          <button>{t("footer_btn")}</button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
