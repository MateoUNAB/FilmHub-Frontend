import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../../util/Util";
import "./styles.css";

export const Header = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenresAsync();
  }, []);

  const getGenresAsync = async () => {
    let response = await fetch(API_URL + "genre");
    response = await response.json();
    setGenres(response);
  };

  return (
    <nav>

      <div className="logo">
        <h1>FilmHub</h1>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
      </div>

      <div className="subGenres">
        <button className="genres">
          Genres <i className="fa fa-caret-down"></i>
        </button>

        <div className="subGenresContent">
          {genres.map((item, idx) => (
            <Link key={idx} to={`/genre/${item.name}`}>
              {item.name}
            </Link>
          ))}
        </div>

      </div>

      <div className="search">
        <input type="text"></input>
      </div>
      
    </nav>
  );
};
