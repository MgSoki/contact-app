import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponent = ({ pass, check, children }) => {
  const nav = useNavigate();

  useEffect(() => {
    if (check) {
      nav(pass);
    }
  }, []);

  return <div>{children}</div>;
};

export default PreventComponent;
