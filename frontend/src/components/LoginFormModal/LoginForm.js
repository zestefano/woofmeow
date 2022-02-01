import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import '../../components/LoginFormModal/login.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demo = () => {
    setCredential('Demo-lition')
    setPassword('password')
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Username or Email
        </label>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      
      <label>
        
        Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
     
      <button type="submit">Log In</button>
      <button className='submit' onClick={demo}>Demo User</button>
      <a href='https://github.com/zestefano'>github.com/zestefano</a>
    </form>
  );
}

export default LoginForm;