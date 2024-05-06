import React, { useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  ErrorComponent,
  LoadingComponent,
} from "../components";
import FormComponent from "../components/Form.component";
import { useNavigate } from "react-router-dom";
import { Register } from "../service/Auth.service";
import useApi from "../hook/useApi";

const RegisterPage = () => {
  const { handleDealApi, loading, error, data } = useApi(Register);
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleDealApi(formData);
  };
  console.log(loading, error, data);
  return (
    <ContainerComponent>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className=" Center">
          <div className=" w-2/6 h-auto">
            <h1 className=" font-serif 4xl text-center ">Login Your Contact</h1>
            {error && <ErrorComponent>{error}</ErrorComponent>}
            <form className=" space-y-3 mt-5" onSubmit={handleSubmit}>
              <FormComponent
                value={formData.name}
                onChange={handleInputChange}
                type={"text"}
                name={"name"}
                label="Username"
              />
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
              <FormComponent
                value={formData.password_confirmation}
                onChange={handleInputChange}
                type="password"
                name="password_confirmation"
                label={"Password Confirm"}
              />
              <ButtonComponent type="submit">Login</ButtonComponent>
            </form>
            <p>
              You have already register?{" "}
              <button
                className=" text-blue-500"
                onClick={() => {
                  nav("/");
                }}
              >
                Login
              </button>{" "}
            </p>
          </div>
        </div>
      )}
    </ContainerComponent>
  );
};

export default RegisterPage;
