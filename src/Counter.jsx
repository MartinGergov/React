import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`The current value is : ${counter}`);
  }, [counter]);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
