import { useState } from "react";
import { useLoginForm } from "./useLoginForm";

export function Login() {
  const { data, handleInputChange, handleReset } = useLoginForm();

  const [enviado, setEnviado] = useState(false);
  function handleLogin(event) {
    event.preventDefault();
    setEnviado(true);
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Controlled Login</h2>
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

        <button type="submit" disabled={!data.username || !data.password}>
          Login
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {data && enviado && (
        <ul>
          <li>Nombre: {data.name}</li>
          <li>Contraseña: {data.password}</li>
        </ul>
      )}
    </div>
  );
}
