import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../user/UserContext";
import { Redirect } from "react-router";

function Register() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && password) {
      const { data } = await axios.post("http://localhost:4000/users", {
        name,
        email,
        password,
      });
      if (data.token) {
        setUser({
          name: data.name,
          email: data.email,
          token: data.token,
        });
      } else {
        setError("Registration error");
      }
    } else {
      setError("Make sure all fields are filled out");
    }
  };
  return (
    <>
      {user && <Redirect to="/" />}
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>{error}</div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.name)}
        />
        <div></div>
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

export default Register;
