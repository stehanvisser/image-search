import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";

const SearchForm = () => {
  let searchTerm = "";

  const [validForm, setValidForm] = useState(false);

  const updateSearchTerm = (event) => {
    searchTerm = event.target.value;
    isValidSearchTerm();
  };

  const sumbit = () => {
    if (validForm) {
      console.log("SUMMITED", searchTerm);
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
    </div>
  );
};

export default SearchForm;
