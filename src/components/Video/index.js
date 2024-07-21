import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";

const Video = ({ kinoId }) => {
  const [trailer, setTrailer] = useState([]);
  const [count, setCount] = useState(3);
  const getTrailer = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${kinoId}/videos?api_key=${key}&language=en-US`
    ).then((res) => setTrailer(res.data.results));
  };

//   console.log(trailer);
  useEffect(() => {
    getTrailer(API_KEY);
  }, []);
  return (
    <div id="video">
      <div className="container">
        <h1>Трейлеры</h1>
        <div className="video">
          {trailer.slice(0, count).map((el, id) => (
            <iframe
              key={id}
              width="234"
              height="163"
              src={`https://www.youtube.com/embed/${el.key}`}
              title={`${el.name}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          ))}
        </div>
        
        {trailer.length <= count ? (
          <button onClick={() => setCount(3)}>Short</button>
        ) : (
          <button onClick={() => setCount(count+3)}>More</button>
        )}
      </div>
    </div>
  );
};

export default Video;
