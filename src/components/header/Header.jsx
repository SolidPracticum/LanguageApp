import React from "react";
import scss from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={scss.headerWrapper}>
      <div className={scss.links}>
        <Link to="/" className={scss.logo}>
          <img src="/images/header/Lang.png" alt="logo" />
        </Link>
      </div>
      <div></div>
      <select className={scss.select}>
        <option>Русский</option>
        <option>English</option>
      </select>
      <Link to="/dashboard" className={scss.sign}>
        Войти
      </Link>

      <div className={scss.btn}>
        <Link to="/login">
          <button className={scss.register}>Регистрация</button>
        </Link>
      </div>
    </header>
  );
}
export default Header;
