import { useEffect, useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <h2>Focusable Input</h2>
      <input ref={inputRef} />
    </div>
  );
}
