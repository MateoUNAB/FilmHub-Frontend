import "./App.css";
import { Body } from "./pages/main/components/body";
import { Header } from "./pages/main/components/header";
import { Genre } from "./pages/main/components/genre";
import { Movie } from "./pages/main/components/movie";
import { SignUp } from "./pages/sign-up";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SignIn } from "./pages/sign-in";

export default function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Routes>
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/genre/:name" element={<Genre />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Body />} />
        </Routes>

      </Router>
    </div>
  );
}
