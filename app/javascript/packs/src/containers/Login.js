import React, { useState, useEffect } from 'react';
import '../../../../assets/stylesheets/frontend.scss';
import Spinner from '../components/Spinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (loading)
      setMessage("Loading");
  }, [loading]);

  const handleLogin = () => {
    console.log(`CLIENT_ID ${process.env.REACT_APP_CLIENT_ID}`);
    setLoading(true);

    fetch('oauth/token', {
      method: 'post',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({ 
        email,
        password,
        "grant_type": "password",
        "client_id": process.env.REACT_APP_CLIENT_ID,
        "client_secret": process.env.REACT_APP_CLIENT_SECRET,
      }),
    })
      .then(result => {
        setLoading(false);
        setMessage(result.statusText);
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
      <div>{message}</div>
    </div>
  );
};

export default Login;
