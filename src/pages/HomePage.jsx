import React from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Benefits from "../components/benefits/Benefits";

function HomePage() {
  return (
    <>
      <div>
        <Header />
        <Main />
      </div>
      <Benefits />
    </>
  );
}

export default HomePage;
