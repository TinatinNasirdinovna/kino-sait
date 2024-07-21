import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import loading from "../../assets/img/loading.svg";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [count, setCount] = useState(1);
  const getPopular = (key) => {
    setPopular([])
    window.scroll(0, 0);
    setTimeout(() => {
      axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${count}`
      ).then((res) => setPopular(res.data.results));
    }, 1000);
  };

//   console.log(popular);
  useEffect(() => {
    getPopular(API_KEY);
  }, [count]);

  return (
    <div id="popular">
      <div className="container">
        {!popular.length ? (
          <div className="loader">
            <img src={loading} alt="img" />
          </div>
        ) : (
          <>
            <div className="popular">
              {popular.map((el, id) => (
                <MovieCard key={id} movie={el} />
              ))}
            </div>
            <div className="pagination">
              <div
                className="pagination--left"
                onClick={() => setCount(count > 1 ? count - 1 : count)}
              >{`<<`}</div>
              <h1>{count}</h1>
              <div
                className="pagination--right"
                onClick={() => setCount(count + 1)}
              >{`>>`}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popular;
