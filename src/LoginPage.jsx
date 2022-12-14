import React, { useState } from "react";

export function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idPwd, setIdPwd] = useState({ id, password });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(idPwd);
    setIdPwd({ ...idPwd, id, password });
    console.log(idPwd);
    // setId("");
    // setPassword("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="loginPage"
          type="text"
          placeholder="Enter UserId"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          className="loginPage"
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login" type="submit">
          Login
        </button>
      </form>
    </>
  );
}
