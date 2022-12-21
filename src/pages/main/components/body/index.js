import { useEffect, useState } from "react";
import { Card } from "./card";
import "./styles.css";

export const Body = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesAsync();
  }, []);

  const getMoviesAsync = async () => {
    let response = await fetch("http://localhost:8080/api/movie");
    response = await response.json();
    setMovies(response);
  };

  return (
    <div className="cards">
      {movies.map((movie, idx) => (

        <Card
          key={idx}
          name={movie.name}
          description={
            !movie.description ? "No description" : movie.description
          }
          image={
            !movie.imageLink
              ? "https://i.pinimg.com/originals/dc/cc/84/dccc846959dffafa30a836dfacf9bab9.gif"
              : movie.imageLink
          }
          id={movie.id}
        />
        
      ))}
    </div>
  );
};
