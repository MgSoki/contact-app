import React from "react";

const ButtonComponent = ({ style, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={`px-2 py-3 bg-blue-400 text-white active:ring-2 active:ring-blue-700 duration-200 w-full rounded-md ${style}`}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
