import StarsRating from "../StarsRating/StarsRating";
import scss from "./Card.module.scss";
import { useTranslation } from "react-i18next";
export default function Card({ img, name, rating, desc, color }) {
  const { t } = useTranslation();
  return (
    <div className={scss.wrapper}>
      <div className={scss.imgWrapper}>
        <img src={img} alt="" />
      </div>
      <div className={scss.card}>
        <div
          style={{
            background: `${color}`
          }}
          className={scss.name}
        >
          <p>{t(`${name}`)}</p>
          <StarsRating rating={rating} />
          <div className={scss.t}>
            <div
              style={{
                background: `${color}`
              }}
              className={scss.left}
            >
              <div
                style={{
                  background: `${color}`
                }}
                className={scss.fill}
              ></div>
            </div>
            <div
              style={{
                background: `${color}`
              }}
              className={scss.right}
            ></div>
          </div>
        </div>
        <div className={scss.desc}>
          <p>{t(`${desc}`)}</p>
        </div>
      </div>
    </div>
  );
}
