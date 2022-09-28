import React, { useState } from "react";

const InputDemo = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{margin: '20px auto' }}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {
        JSON.stringify({username,password})
      }
    </div>
  );
};

export default InputDemo;
