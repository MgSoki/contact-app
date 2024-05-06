import React, { useState } from "react";
import { ButtonComponent, ContainerComponent } from "../components";
import FormComponent from "../components/Form.component";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  
  return (
    <ContainerComponent>
      <div className=" Center">
        <div className=" w-2/6 h-auto">
          <h1 className=" font-serif 4xl text-center ">Login Your Contact</h1>
          <form className=" space-y-3 mt-5" onSubmit={handleSubmit}>
            <FormComponent
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              name="email"
              placeholder="Email Address"
              label={"Your Email"}
            />
            <FormComponent
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              name="password"
              label={"Password"}
            />
            <ButtonComponent type="submit">Login</ButtonComponent>
          </form>
          <p>You haven't account? <button className=" text-blue-500" onClick={() => {
            nav("/register")
          }}>Register</button> </p>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default LoginPage;
