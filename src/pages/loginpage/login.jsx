import React, { useState } from "react";
import LoginModal from "./loginmodel";

const Login = ({ onLogin }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <div>
      <LoginModal show={show} handleClose={handleClose} onLogin={onLogin} />
    </div>
  );
};

export default Login;
