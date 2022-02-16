import "./App.css";
import SearchForm from "./containers/SearchForm";
import { useState } from "react";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="background-container">
      <SearchForm imageUrl={imageUrl} updateImageUrl={setImageUrl}></SearchForm>
      HELLO
    </div>
  );
};

export default App;
