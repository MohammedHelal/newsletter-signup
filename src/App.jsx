import { useState } from "react";
import SignUp from "./components/SignUp.jsx";
import ThankYou from "./components/ThankYou.jsx";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");

  let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  function emailChangeHandler(e) {
    setIsError(false);
    setEmail(e.target.value);
  }

  function emailBlurHandler() {
    if (!regex.test(email)) {
      setIsError(true);
      return;
    }

    setIsError(false);
  }

  function formHandler(e) {
    e.preventDefault();

    if (!regex.test(email)) {
      setIsError(true);
      return;
    }

    setIsSuccess(true);
    setIsError(false);
    
  }

  function dismissMessage() {
    setIsSuccess(false);
    setEmail("");
  }

  return (
    <main>
      {!isSuccess ? (
        <SignUp
          changeEmail={emailChangeHandler}
          blurEmail={emailBlurHandler}
          formHandler={formHandler}
          email={email}
          isError={isError}
          setIsError={setIsError}
        />
      ) : (
        <ThankYou email={email} dismissMessage={dismissMessage} />
      )}
    </main>
  );
}

export default App;
