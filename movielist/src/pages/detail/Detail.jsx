import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./detail.scss";
import VideoList from "./VideoList";
import Button from "../../components/button/Button";
import { useSelector } from "react-redux";

const Detail = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          >
            <div className="mb-3 movie-content container">
              <div className="movie-content__info">
                <h1 className="title">{item.title || item.name}</h1>
                <div className="genres">
                  {item.genres &&
                    item.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="genres__item">
                        {genre.name}
                      </span>
                    ))}
                </div>
                <p className="overview">{item.overview}</p>
                <Button>Watch Trailer</Button>
              </div>
              <div className="movie-content__poster">
                <div
                  className="movie-content__poster__img"
                  style={{
                    backgroundImage: `url(${apiConfig.originalImage(
                      item.poster_path || item.backdrop_path
                    )})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          {isLoggedIn ? (
            <div className="container">
              <div className="section mb-3">
                <VideoList id={item.id} />
              </div>
            </div>
          ) : (
            <div className="warning">
              <h2 style={{ color: "black" }}>
                -Please login/register to watch more videos-
              </h2>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Detail;
