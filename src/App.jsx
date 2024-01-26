import { useState } from "react";
import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock/Clock";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter/Counter";
import { FocusableInput } from "./FocusableInput";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./LoginForm/Login";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { TodoList } from "./TodoList/TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
import { LanguageContext } from "./LanguageContext";
import { GithubUsers } from "./GithubList/GithubUsers";

export function App() {
  const [language, setLanguage] = useState("en");

  function handleChangeLanguage(language) {
    setLanguage(language);
  }

  return (
    <Container title={<h1>React</h1>}>
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
      <LanguageContext.Provider value={language}>
        <Clock />
        <button onClick={() => handleChangeLanguage("es")}>ES</button>
        <button onClick={() => handleChangeLanguage("en")}>EN</button>
      </LanguageContext.Provider>
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
      <TodoList />
      <hr />
      <GithubUsers />
    </Container>
  );
}
