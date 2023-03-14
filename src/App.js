import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";

import "./App.scss";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/loginPage" element={<LoginPage />} />

        <Route path="/dashboard" element={<UserPage />} />

      </Routes>
    </>
  );
}
export default App;
