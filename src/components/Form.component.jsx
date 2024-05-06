import React from "react";

const FormComponent = ({ type, name, placeholder, label = "", ...rest }) => {
  return (
    <div className=" flex flex-col">
      <label htmlFor={name} className=" text-lg">
        {label}
      </label>
      <input {...rest}
        className="px-2 py-3 border-blue-500 border rounded mt-3"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormComponent;
