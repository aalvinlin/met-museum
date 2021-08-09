import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

import './App.css';

function App() {

  const [userInput, setUserInput] = useState("");
  const [dataRetrieved, setDataRetrieved] = useState([]);

  useEffect(() => {

    const queryURL = process.env.REACT_APP_PROXY_SERVER + "/q=" + userInput;
    console.log("querying", queryURL)

    axios.get(queryURL)
      .then(results => setDataRetrieved(results))
      .catch(error => console.error(error))
  }, [userInput])

  return (
    <div className="App">
      <Header />
      <SearchForm userInput={userInput} setUserInput={setUserInput} />
      <SearchResults dataRetrieved={dataRetrieved} />
    </div>
  );
}

export default App;
