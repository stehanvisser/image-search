import PropTypes from "prop-types";

const Button = ({ text, disabled, onClick, width }) => {
  return (
    <>
      <button
        style={{ width: width }}
        className="btn"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

Button.defaultProps = {
  text: "",
  disabled: false,
  onClick: {},
  width: "100%",
};

Button.prototype = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  width: PropTypes.string,
};

export default Button;
