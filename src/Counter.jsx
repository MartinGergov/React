import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

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
      <button ref={changeRef} onClick={handleCounterIncrement}>
        Increment
      </button>
      <button ref={changeRef} onClick={handleCounterDecrement}>
        Decrement
      </button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
