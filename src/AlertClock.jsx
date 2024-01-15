export function AlertClock() {
  function handleClick() {
    const now = new Date().toLocaleTimeString();
    alert(`The current time is: ${now}`)
  }

  return (
    <div>
      <button onClick={handleClick}>Current Time</button>
    </div>
  );
}
