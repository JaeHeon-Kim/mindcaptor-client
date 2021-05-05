import React, { useState } from 'react';
import '../../main.css';
import logo from '../../images/mindcaptor_logo_join.png';
const axios = require('axios');

export default function Signup({ isOpen, close, loginHandler }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickName] = useState('');
  const [isNone, setIsNone] = useState(true);
  const [message, setMessage] = useState('');

  const emailInputValue = (e) => {
    setEmail(e.target.value);
  };

  const passwordInputValue = (e) => {
    setPassword(e.target.value);
  };

  const nickNameInputValue = (e) => {
    setNickName(e.target.value);
  };

  const signUpHandler = () => {
    axios
      .post(
        'http://localhost:4000/signup',
        { email, password, nickname },
        {
          headers: { 'Content-Type': 'application/json' },
          Credentials: 'include',
        }
      )
      .then((res) => {
        setIsNone(false);
        setMessage(res.data.message);
        setTimeout(() => {
          setIsNone(true);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isOpen ? (
        <div className="container_signup">
          <div className="signup">
            <div className="close">
              <span
                type="button"
                aria-label="Close"
                className="signup_exit"
                onClick={close}
              >
                &times;
              </span>
            </div>
            <div className="signup_box">
              <div className="logo_box">
                <img src={logo} className="logo_signup" alt="siginup" />
              </div>
              <div
                className="failed_sginin"
                style={{ opacity: isNone ? '0' : '1' }}
              >
                {message}
              </div>
              <input
                name="email"
                className="signup_input"
                type="text"
                placeholder="이메일"
                onChange={emailInputValue}
              />
              <input
                name="password"
                className="signup_input"
                type="password"
                placeholder="패스워드"
                onChange={passwordInputValue}
              />
              <input
                name="nickname"
                className="signup_input"
                type="text"
                placeholder="닉네임"
                onChange={nickNameInputValue}
              />
              <button onClick={signUpHandler} className="signup_btn">
                회원가입
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
