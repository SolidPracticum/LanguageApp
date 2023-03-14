/* eslint-disable no-undef */
import React from "react";
import scss from "./Header.module.scss";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Header({ isHeader, color }) {
  return (
    <header className={scss.headerWrapper}>
      <div className={scss.links}>
        <Link to="/" className={scss.logo}>
          <img src="/images/header/Lang.png" alt="logo" />
        </Link>
      </div>
      {isHeader ? (
        <>
          <Link to="/dashboard" className={scss.mainHeader}>
            Главная
          </Link>
          <select
            className={scss.select}
            style={{
              color: `${color}`
            }}
          >
            <option>Русский</option>
            <option>English</option>
          </select>
        </>
      ) : (
        <>
          <select className={scss.select}>
            <option>Русский</option>
            <option>English</option>
          </select>
          <Link to="/dashboard" className={scss.sign}>
            Войти
          </Link>
          <div className={scss.btn}>
            <Link to="/loginPage">
              <button className={scss.register}>Регистрация</button>
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
export default Header;
