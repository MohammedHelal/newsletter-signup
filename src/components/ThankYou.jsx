import PropTypes from "prop-types";
import "./ThankYou.css";

function ThankYou({ email, dismissMessage }) {
  return (
    <article className="card">
      <div>
        <img src="./assets/images/icon-success.svg" alt="list image" />
        <h1>Thanks for subscribing! </h1>
        <p>
          A confirmation email has been sent to <span>{email}</span>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <button onClick={dismissMessage}>Dismiss Message</button>
    </article>
  );
}

ThankYou.propTypes = {
  email: PropTypes.string,
  dismissMessage: PropTypes.func,
};

export default ThankYou;
