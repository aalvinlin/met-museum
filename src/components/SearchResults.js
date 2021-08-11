import React, { useState } from "react";
import SearchNavigation from "./SearchNavigation";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({dataRetrieved}) => {

    const {total, objectIDs} = dataRetrieved;
    const [currentPage, setCurrentPage] = useState(1);

    if (Object.keys(dataRetrieved).length === 0 || !objectIDs)
        { return <div id="searchResults"></div>; }

    console.log(dataRetrieved);

    let summaryText = "No results found."

    if (total > 0)
        { summaryText = `Found ${total.toLocaleString()} results.`; }

    const resultsPerPage = 12;
    const totalPages = Math.ceil(total / resultsPerPage);
    const currentView = objectIDs.slice(resultsPerPage * (currentPage - 1), resultsPerPage * currentPage);

    return (
        <div id="searchResults">
            <p class="summaryText">{summaryText}</p>
            <SearchNavigation totalPages={totalPages} resultsPerPage={resultsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div id="searchItemsContainer">
                {currentView.map(itemID => <SearchResultItem itemID={itemID} />)}
            </div>
            <SearchNavigation totalPages={totalPages} resultsPerPage={resultsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default SearchResults;