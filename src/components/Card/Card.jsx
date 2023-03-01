import StarsRating from "../StarsRating/StarsRating";
import scss from "./Card.module.scss";
export default function Card({ img, name, rating, desc, color }) {
  console.log(img);
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
          <p>{name}</p>
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
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
