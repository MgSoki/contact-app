import React from "react";
import { PreventComponent } from "../components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("auth");
    nav("/")
  };
  return (
    <PreventComponent check={!localStorage.getItem("auth")} pass={"/"}>
      <div>HomePage</div>
      <button onClick={handleLogOut}>LogOut</button>
    </PreventComponent>
  );
};

export default HomePage;
