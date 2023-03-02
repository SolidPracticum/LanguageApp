import React from "react";
import scss from "./Main.module.scss";
function Main() {
  return (
    <main className={scss.main}>
      <img className={scss.recta} src="/images/main/Rectangle 33.png" alt="logo" />
      <h2 className={scss.h2}>
        Изучай английский легко с <br /> помощью лучших методов
      </h2>
      <h5 className={scss.h5}>
        Мы сочетаем лучшие методики для <br /> обучения английскому
      </h5>
      <button className={scss.btn}>Начать обучение</button>
      <img className={scss.rect} src="/images/main/Rectangle 47.png" alt="logo" />
      <img src="/images/main/Main.png" alt="logo" />
      <hr className={scss.hr} />
    </main>
  );
}

export default Main;
