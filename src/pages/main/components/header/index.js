import { useEffect, useState } from "react";
import "./styles.css";

export const Header = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenresAsync();
  }, []);

  const getGenresAsync = async () => {
    let response = await fetch("http://localhost:8080/api/genre");
    response = await response.json();
    setGenres(response);
  };

  return (
    <nav>
      <div className="logo">
        <h1>FilmHub</h1>
      </div>

      <div className="links">
        <a href="#">Home</a>
      </div>

      <div className="subGenres">
        <button className="genres">
          Genres <i className="fa fa-caret-down"></i>
        </button>
        <div className="subGenresContent">
          {genres.map((item, idx) => (
            <a key={idx} href="#">
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="search">
        <input type="text"></input>
      </div>
    </nav>
  );
};
