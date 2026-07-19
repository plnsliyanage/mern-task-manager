import { useEffect } from "react";
import API from "../services/axios";

const Login = () => {
  useEffect(() => {
    API.get("/auth/me")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return <div>Login Page</div>;
};

export default Login;
