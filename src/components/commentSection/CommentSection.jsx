import Card from "../Card/Card";
import scss from "./CommentSection.module.scss";
import { arr } from "../constatns/CommentSection";
import { useTranslation } from "react-i18next";

export default function CommentSection() {
  const { t } = useTranslation();
  return (
    <div className={scss.wrapper}>
      <h1>{t("Что ученики говорят о нас?")}</h1>
      <div className={scss.cards}>
        {arr.map((el, item) => (
          <Card key={item} {...el} />
        ))}
      </div>
    </div>
  );
}
