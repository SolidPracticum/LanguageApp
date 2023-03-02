import React from "react";
import scss from "./Benefits.module.scss";

function Benefits() {
  return (
    <div>
      <h1>Почему выбирают нас?</h1>
      <div className={scss.wrapper}>
        <div>
          <img src="./images/benefits/effect.svg" alt="effective learning" />
          <h6>Эффективное обучение </h6>
          <span>
            Задания по грамматике, чтению, аудированию, произношению <br />
            помогут тебе улучшать свои
            <br /> языковые навыки.
          </span>
        </div>
        <div>
          <img src="./images/benefits/individual.svg" alt="individuality" />
          <h6>Индивидуальность </h6>
          <span className={scss.first}>
            Учи то ,что нужно именно тебе, пиши слова, а мы подберем задания к ним для лучшего
            запоминания.
          </span>
        </div>
        <div>
          <img src="./images/benefits/audio.svg" alt="audio stories" />
          <h6>Аудио истории </h6>
          <span className={scss.second}>
            Слушай, читай, переводи - один из лучших методов изучения <br /> английского.
          </span>
        </div>
        <div>
          <img src="./images/benefits/possib.svg" alt="possibilities" />
          <h6>Возможности </h6>
          <span className={scss.third}>
            Отслеживай прогресс и поддерживайт ежедневные занятия, получай награды и медали.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
