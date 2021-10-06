import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <>
      <button className="btn" onClick={onClick}>
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
