// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css'

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = (event) => {
//     event.preventDefault();
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const existingUser = users.find(user => user.email === email);
//     if (existingUser) {
//       alert('User already exists');
//       return;
//     }
//     const newUser = { email, password };
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
//     navigate('/login');
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//       <button onClick={() => navigate('/login')}>Already have an account? Login</button>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert('User already exists');
      return;
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="signup-btn">
          Signup
        </button>
      </form>
      <button onClick={() => navigate('/login')} className="login-btn">
        Already have an account? Login
      </button>
    </div>
  );
}

export default Signup;
