import Card from "../Card/Card";
import scss from "./CommentSection.module.scss";
import { arr } from "../constatns/CommentSection";

export default function CommentSection() {
  return (
    <div className={scss.wrapper}>
      <h1>Что ученики говорят о нас?</h1>
      <div className={scss.cards}>
        {arr.map((el) => (
          <Card {...el} />
        ))}
      </div>
    </div>
  );
}
