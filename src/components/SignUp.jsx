import PropTypes from "prop-types";
import "./SignUp.css";

function SignUp({
  formHandler,
  blurEmail,
  changeEmail,
  email,
  isError,
  setIsError,
}) {
  return (
    <section className="container">
      <figure>
        <img
          src="./assets/images/illustration-sign-up-desktop.svg"
          alt="illustration for signup"
          className="image"
        />
      </figure>
      <article className="sign-up-article">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <p>
          <img src="./assets/images/icon-list.svg" alt="list image" /> Product
          discovery and building what matters{" "}
        </p>
        <p>
          <img src="./assets/images/icon-list.svg" alt="list image" /> Measuring
          to ensure updates are a success
        </p>
        <p>
          <img src="./assets/images/icon-list.svg" alt="list image" /> And much
          more!
        </p>
        <form className="sign-up-form" onSubmit={formHandler}>
          <div className="flex">
            <label htmlFor="email">Email address</label>
            {isError && <p>Valid email required</p>}
          </div>
          <input
            className={"email-input " + (isError && "email-input-error")}
            name="email"
            type="text"
            value={email}
            onChange={(e) => changeEmail(e)}
            onBlur={blurEmail}
            onFocus={() => setIsError(false)}
            placeholder="email@company.com"
          />

          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </article>
    </section>
  );
}

SignUp.propTypes = {
  checkSuccess: PropTypes.func,
  changeEmail: PropTypes.func,
  email: PropTypes.string,
  formHandler: PropTypes.func,
  blurEmail: PropTypes.func,
  isError: PropTypes.bool,
  setIsError: PropTypes.func,
};

export default SignUp;
