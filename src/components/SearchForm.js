import React, { useState } from "react";

const SearchForm = ({setSearchQuery, setCurrentPage}) => {

    const [currentInput, setCurrentInput] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        setSearchQuery(currentInput);
        setCurrentPage(1);
    }

    const handleCurrentInput = event => {
        setCurrentInput(event.target.value);
    }

    return (
        <form id="searchForm" onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Search:
                <input type="searchInput" id="searchInput" onInput={handleCurrentInput}></input>
            </label>
            <button type="submit">Go!</button>
        </form>
    );
}

export default SearchForm;