import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { searchFormFacade } from "../facades/search-form.facade";
import { adjectives } from "../consts/adjectives";
import Loader from "../components/Loader";
import ImageCard from "./ImageCard";

const SearchForm = ({ imageUrl, updateImageUrl }) => {
  const [validForm, setValidForm] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [showSearchView, setShowSearchView] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    isValidSearchTerm();
  };

  const sumbit = async () => {
    if (validForm) {
      setImageLoading(true);
      const result = await searchFormFacade.search(calcSearchTerm());
      updateImageUrl(result);
      changeShowSearchViewState();
      setImageLoading(false);
    }
  };

  function calcSearchTerm() {
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length - 1)];
    setSearchTerm(randomAdjective + " " + searchTerm);
    return randomAdjective + " " + searchTerm;
  }

  function isValidSearchTerm() {
    setValidForm(searchTerm.trim().length >= 2);
  }

  function changeShowSearchViewState() {
    setShowSearchView(!showSearchView);
  }

  return (
    <>
      {showSearchView && (
        <section className="searchbar-card">
          <h1>Search</h1>
          <Input
            placeholder="Favourite Animal"
            type="text"
            onChange={updateSearchTerm}
            maxLength={20}
          />
          <Button text="I feel lucky" onClick={sumbit} disabled={!validForm} />

          <div className="loader-container">
            <Loader isLoading={imageLoading}></Loader>
          </div>
        </section>
      )}
      {imageUrl && !showSearchView && (
        <section className="image-container">
          <ImageCard
            imageUrl={imageUrl}
            searchTerm={searchTerm}
            newSearch={changeShowSearchViewState}
          ></ImageCard>
        </section>
      )}
    </>
  );
};

export default SearchForm;
