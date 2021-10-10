import PropTypes from "prop-types";
import Button from "../components/Button";
import { useEffect } from "react";

const ImageCard = ({ imageUrl, searchTerm, newSearch }) => {
  let root = document.documentElement;

  useEffect(() => {
    window.addEventListener("resize", changeImageHeight);
    changeImageHeight();
    return () => {
      window.removeEventListener("resize", changeImageHeight);
    };
  }, []);

  function changeImageHeight() {
    root.style.setProperty(
      "--max-image-height",
      window.innerHeight - 200 + "px"
    );
  }

  return (
    <section className="image-card ">
      <h1>Your animal with a random adjective is {searchTerm}</h1>
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
