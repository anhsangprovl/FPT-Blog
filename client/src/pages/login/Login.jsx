import axios from 'axios';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './login.css';
import React, { useState, useEffect } from "react";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [formErrors, setFormErrors] = useState({});
  const { dispatch, isFetching } = useContext(Context);

   const validateForm = () => {
      const error = {};   
    if (!userRef.current.value) { 
        error.username = "Username is required";
    }
    if (!passwordRef.current.value) {
      error.password = "Password is required";
    }
    return error;
  };
 


  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validateForm());
    if (Object.keys(formErrors).length !== 0) {
      return;
    }

    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('http://localhost:5000/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        {formErrors.username && <p style={{ color: 'red', marginTop: '10px' }}>{formErrors.username}</p>}
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        {formErrors.password && <p style={{ color: 'red', marginTop: '10px' }}>{formErrors.password}</p>}
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
