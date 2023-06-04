import { useState } from "react";
import LoggedIn from "../components/LoggedIn/LoggedIn"
import LoginForm from "../components/LoginForm/LoginForm"
import "../../src/index.css";

function Log() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <body className="body">
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
      </body>
    </>
  );
}

export default Log;
