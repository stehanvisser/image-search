import "./App.css";
import SearchForm from "./containers/SearchForm";
import { useState } from "react";

const App = () => {
  const [imageUrl, setImageUrl] = useState("test");

  return (
    <div className="background-container">
      <SearchForm imageUrl={imageUrl} updateUrl={setImageUrl}></SearchForm>
    </div>
  );
};

export default App;
