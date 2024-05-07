import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const ErrorComponent = ({ children }) => {
  return (
    <div className="flex justify-center items-center border shadow-sm text-red-500 space-x-2 py-2 my-3">
      <IoWarningOutline />
      <h1>{children}!</h1>
    </div>
  );
};

export default ErrorComponent;
