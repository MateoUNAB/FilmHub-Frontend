import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

export const Movie = () => {
  const params = useParams();
  const [movieId, setMovieId] = useState('');
  const [movie, setMovie] = useState([]);
  const [rating, setRating] = useState([]);

  useEffect(() => {
    setMovieId(params.id);
    getMovie();
    setRatingData();
  }, []);

  const getMovie = async () => {
    let response = await fetch("http://localhost:8080/api/movie/" + params.id);
    response = await response.json();
    setMovie(response);
  };

  const sendRatingApi = async (rating) => {
    const ratingDto = {
      rating: rating,
      clientId: "63a36df87c84153164b8aee1",
      movieId: movieId
    }

    const requestData = {
      method: 'POST',
      body: JSON.stringify(ratingDto),
      headers: {
        "Content-type": "application/json"
      }
    }

    let response = await fetch("http://localhost:8080/api/rating", requestData);
    response = await response.json();
  }

  const setRatingData = () => {
    const ratings = []
    for (let index = 1; index <= 10; index++) {
      ratings.push(index);
    }
    setRating(ratings)
  }

  const sendRating = async (event) => {
    const {value} = event.target;
    await sendRatingApi(value);
  }

  return (
    <div className="movieContainer">

      <iframe
        width="500"
        height="500"
        src={
          !movie.trailerLink
            ? "https://cdn.dribbble.com/users/746306/screenshots/5064358/loading.gif"
            : movie.trailerLink
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="details">

        <div className="tittle">
          <h1>{movie.name}</h1>
          <div className="genresContainer">
            {movie.genreList && movie.genreList.length > 0
              ? movie.genreList.map((genre, idx) => (
                  <p key={idx}>{genre.name}</p>
                ))
              : "undefined genre"}
          </div>
        </div>

        <div className="sinopsis">
          <p>{movie.description}</p>
        </div>

        <div className="castContainer">
          {movie.castList && movie.castList.length > 0
            ? movie.castList.map((cast, idx) => (
                <p key={idx}>
                  {cast.name} {cast.lastName} ({cast.role})
                </p>
              ))
            : "undefined cast"}
        </div>

        <div className="rating">
        <p>Rate movie</p>
        <select onChange={sendRating}>
          <option defaultValue={'unrated'} selected disabled>unrated</option>
          {rating.map((element, idx)=>(
            <option key={idx}>{element}</option>
          ))}
        </select>
        </div>

      </div>

    </div>
  );
};
