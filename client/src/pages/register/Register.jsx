import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('http://localhost:5000/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('http://localhost:3000/login');
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="auth">
      <h1 className="signup-title">Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-btn" type="submit">
          Sign up
        </button>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>

      {error && (
        <span style={{ color: 'red', marginTop: '10px' }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
