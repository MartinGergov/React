import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter/Counter";
import { Link } from "react-router-dom";

export function App() {
  return (
    <Container>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Martin" />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Container>
  );
}
