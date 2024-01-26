import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);

  async function fetchUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchUser(username);
  }, [username]);
  return (
    <div>
      {data && <h3>{data.name}</h3>}
      {data && <h3>{data.login}</h3>}
      {data && <h3>{data.avatar}</h3>}
    </div>
  );
}
