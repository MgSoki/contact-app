import { api } from "./api";

export const Register = async (data) => {
    console.log(data);

     const res = await api.post("/register", data);
     return res;
};
