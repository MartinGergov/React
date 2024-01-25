import { useContext, useEffect, useState } from "react";
import classes from "./Clock.module.scss";
import { LanguageContext } from "../LanguageContext";

export function Clock() {
  const language = useContext(LanguageContext);

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  });

  return (
    <div className={classes.clock}>
      <p>
        {language === "en" ? "Current time: " : "Hora actual: "}
        <strong>{date.toLocaleTimeString()}</strong>
      </p>
    </div>
  );
}
