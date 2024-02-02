import { useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubUser.jsx";

export function GithubUser() {
  const { username } = useParams();
  const { data, loading, error, onFetchUser } = useGithubUser(username);

  function handleGetData() {
    onFetchUser();
  }
  return (
    <div>
      <button onClick={handleGetData}>Load user data</button>
      {error && <h3>There has been an error</h3>}
      {loading && <h3>Loading...</h3>}
      {data && <h3>{data.name}</h3>}
    </div>
  );
}
