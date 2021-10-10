import "../assets/styles/Loader.css";
import PropTypes from "prop-types";

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

Loader.defaultProps = {
  isLoading: false,
};

Loader.prototype = {
  isLoading: PropTypes.bool,
};

export default Loader;
