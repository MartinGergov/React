import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function Login() {
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

  //   function handleLogin() {
  //     onLogin(data);
  //   }

  function handleReset() {
    setData(createData());
  }

  return (
    <div>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
        placeholder="Enter your password"
      />
      <input
        name="remember"
        type="checkbox"
        value={data.remember}
        onChange={handleInputChange}
      />
      <button disabled={!data.username || !data.password}>Login</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
