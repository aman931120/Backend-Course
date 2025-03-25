import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username,password})
  }

  return (
    <div>
      <h1 className="font-bold mb-3">Login</h1>
      <input
        className="border-1 rounded-l"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      <br />
      <input
        className="border-1 rounded-l mb-2 mt-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <br />
      <button onClick={handleSubmit} className="mb-4">Submit</button>
    </div>
  );
}

export default Login;
