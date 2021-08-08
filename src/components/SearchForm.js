import React from "react";

const SearchForm = ({userInput, setUserInput}) => {

    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleInput = event => {
        setUserInput(event.target.value);
    }

    return (
        <form id="searchForm" onSubmit={handleSubmit}>
            <label for="searchInput">Search for an artist or keyword:</label>
            <input type="searchInput" id="searchInput" onInput={handleInput}></input>
        </form>
    );
}

export default SearchForm;