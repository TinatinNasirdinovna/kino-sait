import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import Actors from "../../components/Actors";
import Video from "../../components/Video";

const MovieDetails = () => {
  const [details, setDetails] = useState({});

  let { kinoId } = useParams();
  const getDetails = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${kinoId}?api_key=${key}&language=en-US`
    ).then((res) => setDetails(res.data));
  };
//   console.log(details);
  useEffect(() => {
    getDetails(API_KEY);
  }, []);

  let {
    title,
    poster_path,
    release_date,
    genres,
    runtime,
    tagline,
    overview,
    vote_average,
    backdrop_path,
  } = details;
  return (
    <>
    <div
      id="details"
      style={{
        background: `linear-gradient(rgba(69, 80, 80, 0.60), rgba(52.5, 52.5, 52.5, 0.60) 50%, rgba(121, 113, 113, 0.60) 100%), url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}') no-repeat center/cover`,
      }}
    >
      <div className="container">
        <div className="details">
          <img
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
            alt=""
          />
          <div className="details--content">
            <h1>
              {title} ({release_date?.slice(0, 4)})
            </h1>
            <div className="details--content__release">
              <h3>{release_date} • </h3>
              <div className="details--content__release--genres">
                {genres?.map((el, id) => (
                  <h3 key={id}> {el.name}, </h3>
                ))}
              </div>
              <h3>
                {" "}
                • {Math.floor(runtime / 60)}h {runtime % 60}min
              </h3>
            </div>
            <div className="details--content__isons">
              <div className="details--content__isons--vote">
                <h2>{Math.round(vote_average * 10)}%</h2>
              </div>
              <div className="details--content__isons--icon">
                <a href="#">
                  <TfiMenuAlt />
                </a>
              </div>
              <div className="details--content__isons--icon">
                <a href="#">
                  <FaHeart />
                </a>
              </div>
              <div className="details--content__isons--icon">
                <a href="#">
                  <FaBookmark />
                </a>
              </div>
              <div className="details--content__isons--icon">
                <a href="#">
                  <IoStar />
                </a>
              </div>
            </div>
            <i>{tagline}</i>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
    <Actors kinoId={kinoId}/>
    <Video kinoId={kinoId}/>
    </>
  );
};

export default MovieDetails;
