import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter/Counter";
import { Link } from "react-router-dom";
import { GithubUser } from "./GithubList/GithubUser";
import { GithubUsers } from "./GithubList/GithubUsers";

export function App() {
  return (
    <Container>
      <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
      <Link to="users">Github users</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Martin" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUsers />}>
          <Route path="username" element={<GithubUser />} />
        </Route>
        <Route
          path="/*"
          element={
            <div>
              <p>Not found</p>
              <Link to="/">Go home</Link>
            </div>
          }
        />
      </Routes>
    </Container>
  );
}
