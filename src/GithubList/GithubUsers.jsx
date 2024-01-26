import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [data, setData] = useState("");
  const [usernames, setUsernames] = useState([]);

  function handleSearch(event) {
    event.preventDefault();

    setUsernames((prevUsernames) => [...prevUsernames, data]);

    setData("");
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={data} onChange={(event) => setData(event.target.value)} />
        <button>Search</button>
      </form>
      <h3>List of users:</h3>
      <ul>
        {usernames.map((username) => (
          <li key={username}>
            <GithubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
}
