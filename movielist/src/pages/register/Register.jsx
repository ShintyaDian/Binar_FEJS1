import { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/auth";

const Register = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onRegister = (e) => {
    e.preventDefault();

    const data = { email, password, name };

    if (password !== confirmPassword) {
      toast.error("Confirm password must be same with password");
      return;
    }

    dispatch(register(data, navigate));
  };

  return (
    <div className="Register">
      <div className="register-form">
        <h2>Register</h2>
        <form>
          <div className="inputRegister">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-register" onClick={onRegister}>
            Register
          </button>
        </form>
        <div className="linkRegister">
          <p style={{ color: "black" }}>Already have an account?</p>
          <Link
            to="/login"
            style={{ color: "red", textDecoration: "underline" }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
