import { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error, fetchUser } = useGithubUser(username);
  useEffect(() => {
    fetchUser(username);
  }, [username]);
  return (
    <div>
      {error && <h3>There has been an error</h3>}
      {loading && <h3>Loading...</h3>}
      {data && <h3>{data.name}</h3>}
      {data && <h3>{data.login}</h3>}
      {data && <h3>{data.avatar}</h3>}
    </div>
  );
}
