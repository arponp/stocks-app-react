import React from "react";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="text" name="email" />
        <div></div>
        <label>Password:</label>
        <input type="password" name="password" />
        <div></div>
        <input type="submit" />
      </form>
    </>
  );
}

export default Login;
