import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useDispatch } from "react-redux";
import { googleLogin, login } from "../../redux/actions/auth";
import { useGoogleLogin } from "@react-oauth/google";
const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();

    const data = { email, password };
    console.log(data);

    dispatch(login(data, navigate));
  };

  const onGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const data = {
        access_token: tokenResponse.access_token,
      };

      dispatch(googleLogin(data, navigate));
    },
  });

  return (
    <div className="Login">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="inputLogin">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-login" onClick={onLogin}>
            Login
          </button>
        </form>
        <p style={{ color: "black" }}>-or login with-</p>
        <button className="btn-google" onClick={() => onGoogle()}>
          Google
        </button>
        <div className="linkLogin">
          <p style={{ color: "black" }}>Don't have an account?</p>
          <Link
            to="/register"
            style={{ color: "red", textDecoration: "underline" }}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
