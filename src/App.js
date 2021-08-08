import React from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

import './App.css';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <SearchResults />
    </div>
  );
}

export default App;
