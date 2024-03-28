import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  };
  return (
    <div>
      <h2> Login</h2>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="Username"
      />{" "}
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {' '}
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
