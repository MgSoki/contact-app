import { Login } from "../../service/Auth.service";

export const LoginAction = async (dispatch, formData) => {
  try {
    dispatch({ type: "loading" });
    const res = await Login(formData);
    if (res.data) {
      dispatch({ type: "login", payload: res.data });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (error) {
    dispatch({ type: "error", payload: res.msg });

  }
};
