import { useEffect, useRef } from "react";

export function FocusableInput() {
  const mountedRef = useRef(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("First time");
    } else {
      mountedRef;
    }
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <h2>Focusable Input</h2>
      <input ref={inputRef} />
    </div>
  );
}
