import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { searchFormFacade } from "../facades/search-form.facade";
import { adjectives } from "../consts/adjectives";
import Loader from "../components/Loader";

const SearchForm = ({ imageUrl, updateImageUrl }) => {
  let searchTerm = "";

  const [validForm, setValidForm] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const updateSearchTerm = (event) => {
    searchTerm = event.target.value;
    isValidSearchTerm();
  };

  const sumbit = async () => {
    if (validForm) {
      setImageLoading(true);
      const result = await searchFormFacade.search(calcSearchTerm());
      updateImageUrl(result);
      setImageLoading(false);
    }
  };

  function calcSearchTerm() {
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length - 1)];
    return randomAdjective + " " + searchTerm;
  }

  function isValidSearchTerm() {
    setValidForm(searchTerm.trim().length >= 2);
  }

  return (
    <article className="searchbar-card">
      <h1 style={{ margin: "0px 0px 20px 0px" }}>Search</h1>
      <Input
        placeholder="Favourite Animal"
        type="text"
        onChange={updateSearchTerm}
        maxLength={20}
      />
      <Button text="I feel lucky" onClick={sumbit} disabled={!validForm} />

      {<img src={imageUrl} alt={searchTerm}></img>}
      <div className="loader-container">
        <Loader isLoading={imageLoading}></Loader>
      </div>
    </article>
  );
};

export default SearchForm;
