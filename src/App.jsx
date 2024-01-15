import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <hr />
      <Hello />
      {/* Puedes usarlo todas las veces que quieras */}
      <Message />
      {/* También se puede usar directamente en la App */}
      {/* Los dos se pueden usar siempre y cuando estén dentro de un solo contenedor padre */}
      <hr />
      <Welcome name="Martin" />
      <hr />
    </div>
  );
}
