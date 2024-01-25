import React, { useState } from "react";

const Welcome = ({ name }) => {
  return (
    <p>
      Welcome <strong>{name}</strong>
    </p>
  );
};

export function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <h2>Interactive Welcome</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

      <Welcome name={inputValue} />
    </div>
  );
}
