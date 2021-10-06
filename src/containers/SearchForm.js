import Button from "../components/Button";
import Input from "../components/Input";

const SearchForm = () => {
  return (
    <div className="searchbar-card">
      <h1 style={{ margin: "0px 0px 20px 0px" }}>Search</h1>
      <Input placeholder="Favourite Animal" type="text" />
      <Button text="I feel lucky" />
    </div>
  );
};

export default SearchForm;
