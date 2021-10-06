import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { searchFormFacade } from "../facades/search-form.facade";

const SearchForm = ({ imageUrl, updateUrl }) => {
  let searchTerm = "";

  const [validForm, setValidForm] = useState(false);

  const updateSearchTerm = (event) => {
    searchTerm = event.target.value;
    isValidSearchTerm();
  };

  const sumbit = async () => {
    if (validForm) {
      const result = await searchFormFacade.search(searchTerm);
      updateUrl(result);
    }
  };

  function isValidSearchTerm() {
    setValidForm(searchTerm.trim().length >= 2);
  }

  return (
    <div className="searchbar-card">
      <h1 style={{ margin: "0px 0px 20px 0px" }}>Search</h1>
      <Input
        placeholder="Favourite Animal"
        type="text"
        onChange={updateSearchTerm}
        maxLength={20}
      />
      <Button text="I feel lucky" onClick={sumbit} disabled={!validForm} />

      <img src={imageUrl}></img>
    </div>
  );
};

export default SearchForm;
