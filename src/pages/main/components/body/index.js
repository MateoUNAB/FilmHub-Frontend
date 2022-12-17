import { Card } from "./card";
import "./styles.css";

export const Body = () => {
  const movies = [
    {
      name: "Test",
      description: "this is a text",
      image:
        "https://i.pinimg.com/originals/dc/cc/84/dccc846959dffafa30a836dfacf9bab9.gif",
    },
    {
      name: "Test",
      description: "this is a text",
      image:
        "https://i.pinimg.com/originals/dc/cc/84/dccc846959dffafa30a836dfacf9bab9.gif",
    },
    {
      name: "Test",
      description: "this is a text",
      image:
        "https://i.pinimg.com/originals/dc/cc/84/dccc846959dffafa30a836dfacf9bab9.gif",
    },
    {
      name: "Test",
      description: "this is a text",
      image:
        "https://i.pinimg.com/originals/dc/cc/84/dccc846959dffafa30a836dfacf9bab9.gif",
    },
  ];

  return (
    <div className="cards">
      {movies.map((movie, idx) => (
        <Card
          key={idx}
          name={movie.name}
          description={movie.description}
          image={movie.image}
        />
      ))}
    </div>
  );
};
