import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

import './App.css';

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [dataRetrieved, setDataRetrieved] = useState({});
  
  useEffect(() => {

    // don't query if searchQuery is an empty string
    if (searchQuery)
      {
        const apiURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
        const queryURL = process.env.REACT_APP_PROXY_SERVER + "/" + apiURL + searchQuery;
        
        axios.get(queryURL)
          .then(results => setDataRetrieved(results.data))
          .catch(error => console.error(error))
      }
  }, [searchQuery])

  return (
    <div className="App">
      <Header />
      <SearchForm setSearchQuery={setSearchQuery} />
      <SearchResults dataRetrieved={dataRetrieved} />
    </div>
  );
}

export default App;
