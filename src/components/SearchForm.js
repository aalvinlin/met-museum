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
            <label htmlFor="searchInput">Search:
                <input type="searchInput" id="searchInput" onInput={handleInput}></input>
            </label>
        </form>
    );
}

export default SearchForm;