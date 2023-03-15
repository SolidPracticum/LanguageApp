/* eslint-disable no-undef */
import React, { useState } from "react";
import scss from "./LoginPage.module.scss";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registrData } from "../../redux/registrSlice";
import { useTranslation } from "react-i18next";

function LoginPage() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation();
  const dataLog = {
    login: login,
    email: email,
    password: password,
    password1: password1
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const test = useSelector((state) => state.login.login);
  console.log(dataLog);
  console.log(test);
  const submit = (e) => {
    e.preventDefault();
    alert(password + password1);
    if (password !== password1) {
      setError(" Password incorrect, please try again! ");
      dispatch(registrData(dataLog));
    } else {
      navigate("/");
    }
  };
  const handleName = (e) => {
    setLogin(e.target.value);
    setError("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const handlePassword = (e) => setPassword(e.target.value);
  const handlePassword1 = (e) => setPassword1(e.target.value);

  return (
    <div>
      <Header isHeader={true} color={"red"} />
      <Main isMain={true} top={640} />
      <form onSubmit={submit} className={scss.form}>
        <h4 className={scss.h4}>{t("akkaunt")}</h4>
        <Input onChange={handleName} type="text" placeholder="Login" required />
        <Input required onChange={handleEmail} type="text" placeholder="Email" />
        <Input required onChange={handlePassword} type="password" placeholder="Пароль" />
        <Input required onChange={handlePassword1} type="password" placeholder={t("pass1")} />
        <div className="error-message">{error}</div>
        <button className={scss.button}>{t("btnLog")}</button>
      </form>
    </div>
  );
}

export default LoginPage;
