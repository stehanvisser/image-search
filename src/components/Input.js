import PropTypes from "prop-types";

const Input = ({ placeholder, type, maxLength, onChange }) => {
  return (
    <>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
      ></input>
    </>
  );
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
  maxLength: 64,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  type: PropTypes.oneOf([
    "tel",
    "text",
    "email",
    "checkbox",
    "file",
    "number",
    "password",
    "radio",
    "submit",
  ]).isRequired,
};

export default Input;
