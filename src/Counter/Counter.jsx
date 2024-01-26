import { useEffect, useRef } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useCounter } from "./useCounter";

export function Counter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  const changeRef = useRef(null);

  useEffect(() => {
    const direction = counter > changeRef.current ? "Up" : "Down";

    if (direction !== "Up" && direction !== "Down") {
      return;
    }

    console.log(`Direction: ${direction}`);
    changeRef.current = counter;

    console.log(`The current value is : ${counter}`);
  }, [counter]);

  return (
    <div>
      <h2>Counter</h2>
      <CounterDisplay counter={counter} />
      <button ref={changeRef} onClick={onIncrement}>
        Increment
      </button>
      <button ref={changeRef} onClick={onDecrement}>
        Decrement
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
