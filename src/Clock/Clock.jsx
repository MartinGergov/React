import { useEffect, useState } from "react";
import classes from "./Clock.module.scss";

export function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  });

  return (
    <div className={classes.clock}>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
}
