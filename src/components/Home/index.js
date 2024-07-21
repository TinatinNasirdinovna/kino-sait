import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";

const Home = () => {
  const [back, setBack] = useState([]);
  const getUrl = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`
    ).then((res) => setBack(res.data.results.map((el) => (el.backdrop_path))));
  };

  // console.log(back);
  useEffect(() => {
    getUrl(API_KEY);
  }, []);
  return (
    <div id="home" style={{background: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${back[Math.round(Math.random()* back.length-1)]}') no-repeat center/cover`}}>
      <div className="container">
        <div className="home">
            <h1>Добро пожаловать.</h1>
            <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
