import React, { useEffect } from "react";
import "./profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, logout } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, isLoggedIn, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(getProfile(navigate));
    }
  }, [dispatch, isLoggedIn, navigate, token]);

  return (
    <div className="Profile">
      <div className="card-profile">
        <h3 style={{ textAlign: "center" }}>MY PROFILE</h3>
        <div className="info">
          <div className="info-name">
            <h4>Username:</h4>
            <p>{user?.name}</p>
          </div>
          <div className="info-email">
            <h4>Email:</h4>
            <p>{user?.email}</p>
          </div>
        </div>
        <button
          className="btn-logout"
          onClick={() => dispatch(logout(navigate))}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
