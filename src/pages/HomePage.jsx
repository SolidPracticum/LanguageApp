import CommentSection from "../components/commentSection/CommentSection";
import React from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Benefits from "../components/benefits/Benefits";
import Footer from "../components/footer/Footer";

function HomePage() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Benefits />
        <CommentSection />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
