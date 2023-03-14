import React from "react";
import { useTranslation } from "react-i18next";
import scss from "./Aside.module.scss";

function Aside() {
  const { t } = useTranslation();
  return (
    <div className={scss.wrapper}>
      <img className={scss.logo} src="/images/aside/logo.svg" alt="" />

      <div className={scss.main}>
        <div className={scss.first}>
          <img src="/images/aside/home.svg" alt="Home" />
          <span>{t("aside")}</span>
        </div>
        <div className={scss.second}>
          <img src="/images/aside/store.svg" alt="Store" />
          <span>{t("store")}</span>
        </div>
        <div className={scss.third}>
          <img src="/images/aside/abc.svg" alt="Dictionaries" />
          <span>{t("abc")}</span>
        </div>
        <div className={scss.fourth}>
          <img src="/images/aside/profile.svg" alt="Profile" />
          <span>{t("profile")}</span>
        </div>
      </div>
    </div>
  );
}

export default Aside;
