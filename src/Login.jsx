import React, { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function Login({ onLogin }) {
  const [data, setData] = useState(createData());

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((info) => {
      return { ...info, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleLogin(event) {
    event.preventDefault();

    onLogin(data);
  }

  function handleReset() {
    setData(createData());
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          name="username"
          value={data.username}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
        />
      </div>
      <div>
        <input
          name="remember"
          type="checkbox"
          value={data.remember}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type="submit" disabled={!data.username || !data.password}>
          Login
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}
