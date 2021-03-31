import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const { data } = await axios.post("http://localhost:4000/users/login", {
        email,
        password,
      });
      if (data.token) {
        console.log(data.token);
        setToken(data.token);
      }
    } else {
      setError("Fill out all fields");
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>{error}</div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div></div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div></div>
        <input type="submit" />
      </form>
    </>
  );
}

export default Login;
