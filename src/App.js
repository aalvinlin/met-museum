import React, { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

import './App.css';

function App() {

  const [userInput, setUserInput] = useState("");
  const results = "";

  return (
    <div className="App">
      <Header />
      <SearchForm userInput={userInput} setUserInput={setUserInput} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
