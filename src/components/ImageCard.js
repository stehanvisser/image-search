import PropTypes from "prop-types";
import Button from "./Button";

const ImageCard = ({ imageUrl, searchTerm, newSearch }) => {
  return (
    <section className="image-card ">
      <h1>Your animal with random adjective is {searchTerm}</h1>
      <div>{<img src={imageUrl} alt={searchTerm} className="img"></img>}</div>
      <Button text="New Search" onClick={newSearch}></Button>
    </section>
  );
};

ImageCard.defaultProps = {
  imageUrl: "",
};

ImageCard.prototype = {
  imageUrl: PropTypes.string,
};

export default ImageCard;
