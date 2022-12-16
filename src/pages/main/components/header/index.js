import "./styles.css";

export const Header = () => {
  return (
    <nav>

      <div className="logo">
        <h1>FilmHub</h1>
      </div>

      <div className="links">
        <a href="#">Home</a>
        <a href="#">Genres</a>
      </div>

      <div className="search">
        <img></img>
        <input type="text"></input>
      </div>

    </nav>
  );
};
