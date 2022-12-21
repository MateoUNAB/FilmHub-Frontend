import { Link } from "react-router-dom";
import "./styles.css";

export const Card = ({ id, image, name, description }) => {
  return (

    <div className="card"> 

      <img src={image} alt="imageCard" />

      <div className="tittleCard">
        <h4>
          <b>{name}</b>
        </h4>
      </div>

      <Link className="detailsLink" to={`/movie/${id}`}>
        MORE DETAILS
      </Link>

    </div>
    
  );
};
