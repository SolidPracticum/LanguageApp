import React from "react";
import { Trans, useTranslation } from "react-i18next";
function HomePage() {
  const { t , i18n } = useTranslation()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
    return (
      <>
      <button onClick={()=>changeLanguage("en")} >EN</button>
      <button onClick={()=>changeLanguage("ru")}>RU</button>
      <hr />
      <div>
        <Trans i18nKey={"description.part1"} >
        Для начала отредактируйте src/App.js и сохраните, чтобы перезагрузить.
        </Trans>
        <div>{t("description.part2")}</div>
      </div>
      </>
    );
  }
  
  export default HomePage;