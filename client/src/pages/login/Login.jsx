import axios from 'axios';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './login.css';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className="login-page">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="login-btn" type="submit" disabled={isFetching}>
          Login
        </button>
        <span>
          Don't you have an account? <Link to="/register">Signup</Link>
        </span>
      </form>
    </div>
  );
}