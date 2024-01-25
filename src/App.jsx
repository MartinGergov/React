import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { UncontrolledLogin } from "./UncontrolledLogin";
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
      <AlertClock />
      <hr />
      <Counter />
      <hr />
      <Clock />
      <hr />
      <MouseClicker />
      <hr />
      <InteractiveWelcome />
      <hr />
      <Login />
      <hr />
      <UncontrolledLogin />
      <hr />
      <FocusableInput />
      <hr />
      <Colors
        colorList={[
          { id: 1, name: "Black" },
          { id: 2, name: "Red" },
          { id: 3, name: "Green" },
          { id: 4, name: "Yellow" },
        ]}
      />
      <hr />
    </div>
  );
}
