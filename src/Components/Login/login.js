import React, { useState } from "react";
import "./styles.css";

const Login = (props) => {
  const [type, setType] = useState("password");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  const { email, setEmail, password, setPassword, emailError, passwordError } =
    props;

  return (
    <div className="container">
      <div className="logoContent">
        <div className="logoOne">AEROSPACE</div>
        <div className="logoTwo">AGRO</div>
      </div>

      <div className="loginContent">
        <a className="enterBtn">Вход</a>
        <a className="registrationBtn">Регистрация</a>

        <div className="inputContent">
          <input
            type="text"
            className="loginInput1"
            placeholder="Email"
            autoFocus
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <div className="passwordBox">
            <input
              placeholder="Password"
              className="loginInput2"
              type={type}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="showBtn" onClick={handleToggle}>
              Показать
            </button>
          </div>
          <p className="errorMsg">{passwordError}</p>
        </div>
        <div className="btnBox">
          <input className="checkbox" type="checkbox" />
          <button className="btn">Войти</button>
          <a className="forgotPassword">Забыли пароль?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
