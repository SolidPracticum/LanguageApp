import React from "react";
import { useTranslation } from "react-i18next";
import scss from "./Main.module.scss";

function Main() {
  const { t } = useTranslation();
  return (
    <main className={scss.main}>
      <img className={scss.recta} src="/images/main/Rectangle 33.png" alt="logo" />
      <h1 className={scss.h1}>{t("main")}</h1>
      <h5 className={scss.h5}> {t("main_second")} </h5>
      <button className={scss.btn}>{t("enter")}</button>
      <img className={scss.rect} src="/images/main/Rectangle 47.png" alt="logo" />
      <img src="/images/main/Main.png" alt="logo" />
      <hr className={scss.hr} />
    </main>
  );
}

export default Main;
