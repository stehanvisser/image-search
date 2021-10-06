import PropTypes from "prop-types";

const Button = ({ text, disabled, onClick }) => {
  return (
    <>
      <button className="btn" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

Button.defaultProps = {
  text: "",
};

Button.prototype = {
  text: PropTypes.string,
};

export default Button;
