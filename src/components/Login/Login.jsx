import React from "react";
import "./Login.module.css";

export default function Login(props) {

  return (
    <div className="Login">
      <form>
        <label htmlFor='mail'>Email</label>
        <input id='mail' type="email" />

        <label htmlFor='pass'>Password</label>
        <input id='pass' type="password" />

        <button>Login</button>
      </form>
    </div>
  );
}
