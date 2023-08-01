import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!username) { 
        error.userName = "Username is required";
    }
    if (!email) {
      error.email = "Email is required";
    } else if (!regex.test(email)) {
      error.email = "This is not a valid email format!";
    }
    if (!password) {
      error.password = "Password is required";
    } else if (password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validateForm());
    setError(false);
    if (Object.keys(formErrors).length !== 0) {
    return;
    }
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
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        {formErrors.userName &&<p style={{ color: 'red', marginTop: '10px' }}>{formErrors.userName}</p>}
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        {formErrors.email && <p style={{ color: 'red', marginTop: '10px' }}>{formErrors.email}</p>}
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        {formErrors.password && <p style={{ color: 'red', marginTop: '10px' }}>{formErrors.password}</p>}
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: 'red', marginTop: '10px' }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
