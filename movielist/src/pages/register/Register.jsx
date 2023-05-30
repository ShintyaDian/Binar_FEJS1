import { useState } from "react";
import "./register.scss";
// import FormInput from "../../components/form-input/FormInput";
import { Link } from "react-router-dom";
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   updateProfile,
// } from "firebase/auth";
// import { auth, providerGoogle } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/auth";
// import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  // const { dispatch } = useContext(AuthContext);

  // const [values, setValues] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const inputs = [
  //   {
  //     id: 1,
  //     name: "username",
  //     type: "text",
  //     placeholder: "Username",
  //     errorMessage:
  //       "Username should be 3-16 characters and shouldn't include any special character!",
  //     pattern: "^[A-Za-z0-9]{3,16}$",
  //     required: true,
  //   },
  //   {
  //     id: 2,
  //     name: "email",
  //     type: "email",
  //     placeholder: "Email",
  //     errorMessage: "It should be a valid email address!",
  //     required: true,
  //   },
  //   {
  //     id: 3,
  //     name: "password",
  //     type: "password",
  //     placeholder: "Password",
  //     errorMessage:
  //       "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
  //     pattern:
  //       "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
  //     required: true,
  //   },
  //   {
  //     id: 4,
  //     name: "confirmPassword",
  //     type: "password",
  //     placeholder: "Confirm Password",
  //     errorMessage: "Passwords don't match!",
  //     pattern: values.password,
  //     required: true,
  //   },
  // ];

  // const onChange = (e) => {
  // setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onRegister = (e) => {
    e.preventDefault();

    // try {
    //   await createUserWithEmailAndPassword(
    //     auth,
    //     values.email,
    //     values.password
    //   ).then((userCredential) => {
    //     const user = userCredential.user;
    //     updateProfile(user, {
    //       displayName: values.username,
    //     });
    //     navigate("/login");
    //   });
    // } catch (error) {}

    const data = { email, password, name };

    if (password !== confirmPassword) {
      toast.error("Confirm password must be same with password");
      return;
    }

    dispatch(register(data, navigate));
  };

  const onGoogle = (e) => {
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
    <div className="Register">
      <form>
        <h2>Register</h2>
        {/* {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))} */}
        <div className="inputRegister">
          <input
            type="text"
            name="username"
            // id="email"
            placeholder="Username"
            // onChange={handleChange}
            // required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            // id="email"
            placeholder="Password"
            // onChange={handleChange}
            // required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            // id="email"
            placeholder="Confirm Password"
            // onChange={handleChange}
            // required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="oAuth">
          <button type="submit" className="btn-register" onClick={onRegister}>
            Register
          </button>
          <button className="btn-google" onClick={onGoogle}>
            Google
          </button>
        </div>
        <div className="linkRegister">
          <p style={{ color: "black" }}>Already have an account?</p>
          <Link
            to="/login"
            style={{ color: "red", textDecoration: "underline" }}
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
