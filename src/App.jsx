import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Welcome name="Martin" />} />
      </Routes>
    </Container>
  );
}
