export function UncontrolledLogin() {
  function handleSubmitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };

    console.log(data);
  }
  return (
    <form onSubmit={handleSubmitForm}>
      <h2>Uncontrolled Login</h2>
      <input name="username" placeholder="Enter your name" />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <input type="checkbox" name="remember" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
