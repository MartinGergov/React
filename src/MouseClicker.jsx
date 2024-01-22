export function MouseClicker() {
  function handleClick(event) {
    console.log(event.target.src);
  }
  return (
    <button name="one" onClick={handleClick}>
      <img src="" width={30} height={30} onClick={handleClick} />
      Click here
    </button>
  );
}
