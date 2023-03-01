import scss from "./StarsRating.module.scss";

function StarsRating({ rating }) {
  const emptyStars = 5 - rating;
  return (
    <div className={scss.wrapper}>
      {[...Array(rating)].map((item) => (
        <img key={item} src="./images/Star 1.svg" alt="star" width={22} />
      ))}
      {[...Array(emptyStars)].map((item) => (
        <img key={item} src="./images/Star 5.svg" alt="epmtystar" width={22} />
      ))}
    </div>
  );
}

export default StarsRating;
