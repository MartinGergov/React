import { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, fetchUser } = useGithubUser(username);
  useEffect(() => {
    fetchUser(username);
  });
  return (
    <div>
      {data && <h3>{data.name}</h3>}
      {data && <h3>{data.login}</h3>}
      {data && <h3>{data.avatar}</h3>}
    </div>
  );
}
