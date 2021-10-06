import PropTypes from "prop-types";

const Input = ({ placeholder, type, onChange }) => {
  return (
    <>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </>
  );
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
};

Input.propTypes = {
  placeholder: PropTypes.string,
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
