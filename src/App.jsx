import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter/Counter";
import { Link } from "react-router-dom";
import { GithubUser } from "./GithubList/GithubUser";

export function App() {
  return (
    <Container>
      <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
      <Link to="/users/:username">Github User</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Martin" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<GithubUser username="MartinGergov" />} />
      </Routes>
    </Container>
  );
}
