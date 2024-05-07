import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./page";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </main>
  );
};

export default App;
