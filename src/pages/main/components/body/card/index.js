import { Link } from "react-router-dom";
import "./styles.css";

export const Card = ({ id, image, name, description }) => {
  return (

    <div className="card"> 

      <Link className="btn" to={`/movie/${id}`}>
        MORE DETAILS
      </Link>
      <img src={image} alt="movieImage" />

      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{description}</p>
      </div>

    </div>
    
  );
};
