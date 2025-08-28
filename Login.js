import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    // Dangerous innerHTML injection
    document.getElementById("welcome").innerHTML =
      "Welcome " + username;
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter username" 
        onChange={e => setUsername(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <div id="welcome"></div>
    </div>
  );
}
