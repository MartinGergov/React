import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function useLoginForm() {
  const [data, setData] = useState(createData());

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((info) => {
      return { ...info, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleReset() {
    setData(createData());
  }

  return {
    data,
    handleInputChange,
    handleReset,
  };
}
