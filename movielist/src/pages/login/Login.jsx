import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { auth, providerGoogle } from "../../firebase";
// import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const { dispatch } = useContext(AuthContext);

  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    // dispatch({ type: "LOGIN_START" });

    // try {
    //   await signInWithEmailAndPassword(
    //     auth,
    //     inputs.email,
    //     inputs.password
    //   ).then((userCredential) => {
    //     const user = userCredential.user;
    //     dispatch({ type: "LOGIN_SUCCESS", payload: user });
    //     navigate("/home");
    //   });
    // } catch (error) {
    //   dispatch({ type: "LOGIN_FAILURE" });
    // }

    const data = { email, password };

    dispatch(login(data, navigate));
  };

  const onGoogle = () => {
    // dispatch({ type: "LOGIN_START" });
    // signInWithPopup(auth, providerGoogle)
    //   .then((result) => {
    //     const user = result.user;
    //     dispatch({ type: "LOGIN_SUCCESS", payload: user });
    //     navigate("/home");
    //   })
    //   .catch((error) => {
    //     dispatch({ type: "LOGIN_FAILURE" });
    //   });
  };

  return (
    <div className="Login">
      <form onSubmit={onLogin}>
        <h2>Login</h2>
        <div className="inputLogin">
          <input
            type="email"
            name="email"
            // id="email"
            placeholder="Email"
            // onChange={handleChange}
            // required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            // id="password"
            placeholder="Password"
            // onChange={handleChange}
            // required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="oAuth">
          <button type="submit" className="btn-login">
            Login
          </button>
        </div>
        <div className="linkLogin">
          {/* <p style={{ color: "black" }}>Don't have an account?</p>
          <Link
            to="/register"
            style={{ color: "red", textDecoration: "underline" }}
          >
            Register
          </Link> */}
          <button className="btn-google" onClick={onGoogle}>
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
