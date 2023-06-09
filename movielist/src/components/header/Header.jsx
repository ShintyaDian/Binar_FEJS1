import React, { useRef, useEffect, useState, useCallback } from "react";

import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import "./header.scss";

import Button, { OutlineButton } from "../button/Button";

import logo from "../../assets/film (1).png";
import { useSelector } from "react-redux";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const MovieSearch = (props) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/movie/search/${keyword}`);
    }
    setKeyword("");
  }, [keyword, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <div className="movie-search">
      <input
        type="text"
        placeholder="What do you want to watch?"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

const Header = (props) => {
  const navigate = useNavigate();

  const headerRef = useRef(null);

  const { keyword } = useParams();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      {isLoggedIn ? (
        <div className="header__wrap container">
          <div className="logo">
            <Link to={isLoggedIn ? "/home" : "/"}>
              <img src={logo} alt="" />
            </Link>
            <Link to={isLoggedIn ? "/home" : "/"} className="logo__name">
              Movielist
            </Link>
          </div>
          <div className="search">
            <MovieSearch keyword={keyword} />
          </div>
          <div className="header__list">
            <Link to="/movie" className="movies">
              All Movies
            </Link>
            <Link to="/profile" className="profile">
              Profile
            </Link>
            <Link to="/profile" className="profile__logo">
              <AccountCircleRoundedIcon fontSize="large" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="header__wrap container">
          <div className="logo">
            <Link to={isLoggedIn ? "/home" : "/"}>
              <img src={logo} alt="" />
            </Link>
            <Link to={isLoggedIn ? "/home" : "/"} className="logo__name">
              Movielist
            </Link>
          </div>
          <div className="search">
            <MovieSearch keyword={keyword} />
          </div>
          <div className="header__button">
            <OutlineButton className="login" onClick={() => navigate("/login")}>
              Login
            </OutlineButton>
            <Button className="register" onClick={() => navigate("/register")}>
              Register
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
