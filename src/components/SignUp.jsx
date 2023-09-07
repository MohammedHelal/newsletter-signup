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
        <img src="" alt="illustration for signup" className="image" />
      </figure>
      <article className="sign-up-article">
        <div className="info">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="sign-up-list">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </div>
        <form className="sign-up-form" onSubmit={formHandler}>
          <label htmlFor="email" className="flex">
            Email address{" "}
            {isError && (
              <span className="error-text">Valid email required</span>
            )}
          </label>
          <input
            className={"email-input " + (isError && "email-input-error")}
            id="email"
            type="text"
            value={email}
            onChange={(e) => changeEmail(e)}
            onBlur={blurEmail}
            onFocus={() => setIsError(false)}
            placeholder="email@company.com"
            autoComplete="email"
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
