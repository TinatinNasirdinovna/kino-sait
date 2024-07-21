import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import user from "../../assets/img/user.png";
const Actors = ({ kinoId }) => {
  const [actor, setActor] = useState([]);

  const getActor = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${kinoId}/credits?api_key=${key}&language=en-US`
    ).then((res) => setActor(res.data.cast));
  };

  useEffect(() => {
    getActor(API_KEY);
  }, []);
  // console.log(actor);
  return (
    <div id="actor">
      <div className="container">
        <h2>В главных ролях</h2>
        <div className="actor">
          {actor.map((el, id) => {
            return (
              <div className="actor--card" key={id}>
                {el.profile_path ? (
                  <img
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.profile_path}`}
                    alt="img"
                  />
                ) : (
                  <img src={user} alt="img" />
                )}
                <h3>{el.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Actors;
