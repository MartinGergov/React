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
      return { ...info, [name]: type === "checked" ? checked : value };
    });
  }

  return (
    <div>
      <input
        name="username"
        value={data.username}
        type="text"
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <input
        name="password"
        value={data.password}
        type="password"
        onChange={handleInputChange}
        placeholder="Enter your password"
      />
      <input
        name="remember"
        value={data.remember}
        type="checkbox"
        onChange={handleInputChange}
      />
    </div>
  );
}
