import { useState } from "react";

export function useGithubUser() {
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

  return { data, fetchUser };
}
