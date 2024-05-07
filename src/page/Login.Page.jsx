import React, { useEffect, useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  ErrorComponent,
  LoadingComponent,
  PreventComponent,
} from "../components";
import FormComponent from "../components/Form.component";
import { useNavigate } from "react-router-dom";
import { Login } from "../service/Auth.service";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/Store";
import { LoginAction } from "../store/action/auth.action";

const LoginPage = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, data, auth } = useSelector((store) => store.auth);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginAction(dispatch, formData);
  };

  return (
    <PreventComponent check={localStorage.getItem("auth")} pass={"/home"}>
      {loading ? (
        <LoadingComponent />
      ) : (
        <ContainerComponent>
          <div className=" Center">
            <div className=" w-2/6 h-auto">
              <h1 className=" font-serif 4xl text-center ">
                Login Your Contact
              </h1>
              {error && <ErrorComponent>{error}</ErrorComponent>}
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
              <p>
                You haven't account?{" "}
                <button
                  className=" text-blue-500"
                  onClick={() => {
                    nav("/register");
                  }}
                >
                  Register
                </button>{" "}
              </p>
            </div>
          </div>
        </ContainerComponent>
      )}
    </PreventComponent>
  );
};

export default LoginPage;
