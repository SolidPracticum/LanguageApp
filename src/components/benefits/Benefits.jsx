import React from "react";
import { useTranslation } from "react-i18next";
import scss from "./Benefits.module.scss";

function Benefits() {
  const { t } = useTranslation();
  return (
    <div className={scss.global}>
      <h1>{t("benefits")}</h1>
      <div className={scss.wrapper}>
        <div>
          <img src="./images/benefits/effect.svg" alt="effective learning" />
          <h6>{t("first_text")}</h6>
          <span>{t("first_card")}</span>
        </div>
        <div>
          <img src="./images/benefits/individual.svg" alt="individuality" />
          <h6>{t("second_text")}</h6>
          <span className={scss.first}>{t("second_card")}</span>
        </div>
        <div>
          <img src="./images/benefits/audio.svg" alt="audio stories" />
          <h6>{t("third_text")}</h6>
          <span className={scss.second}>{t("third_card")}</span>
        </div>
        <div>
          <img src="./images/benefits/possib.svg" alt="possibilities" />
          <h6>{t("fourth_text")}</h6>
          <span className={scss.third}>{t("fourth_card")}</span>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
