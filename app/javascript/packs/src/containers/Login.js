import React, { useState, useEffect } from 'react';
import '../../../../assets/stylesheets/frontend.scss';
import Spinner from '../components/Spinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (loading) {
      setMessage('Loading');
      setError(false);
    }
  }, [loading]);

  const handleLogin = () => {
    setLoading(true);

    fetch('oauth/token', {
      method: 'post',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({
        email,
        password,
        grant_type: 'password',
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
      }),
    })
      .then(result => result.json())
      .then(data => {
        setLoading(false);
        if (data.error) {
          setMessage('Invalid credentials');
          setError(true);
        } else {
          setMessage(data.access_token);
        }
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        setMessage('Invalid credentials');
      });
  };

  return (
    <div className="d-flex flex-column m-auto w-75">
      <h1 className="h4 mx-auto mt-3 mb-5">Enter your credentials</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input
          type="email"
          className="form-control"
          placeholder="example@example.com"
          aria-label="email"
          name="email"
          onChange={e => { setEmail(e.target.value); }}
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="enter your password"
          aria-label="email"
          name="password"
          onChange={e => { setPassword(e.target.value); }}
          aria-describedby="basic-addon1"
        />
      </div>
      <button
        type="button"
        className="button background-blue mx-auto p-3 w-100 text-white"
        onClick={() => handleLogin()}
      >
        Enter
      </button>
      {loading ? <Spinner /> : ''}
      <div>
        {
          error
            ? (
              <div className="alert alert-danger mt-2" role="alert">
                {message}
              </div>
            )
            : ''
        }
      </div>
    </div>
  );
};

export default Login;
