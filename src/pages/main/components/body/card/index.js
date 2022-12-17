import "./styles.css";

export const Card = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt="movieImage"/>

      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
