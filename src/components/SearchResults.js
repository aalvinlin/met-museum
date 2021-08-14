import React from "react";
import SearchNavigation from "./SearchNavigation";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({dataRetrieved, currentPage, setCurrentPage}) => {

    const {total, objectIDs} = dataRetrieved;
    
    // user has not searched for anything yet
    if (Object.keys(dataRetrieved).length === 0)
        { return <div id="searchResults"></div>; }

    // search successful but returned no results
    if (total === 0)
        { return <div id="searchResults"><p className="summaryText">No results found.</p></div>; }

    const summaryText = `Found ${total.toLocaleString()} results.`;

    const resultsPerPage = 12;
    const totalPages = Math.ceil(total / resultsPerPage);
    const currentView = objectIDs.slice(resultsPerPage * (currentPage - 1), resultsPerPage * currentPage);

    return (
        <div id="searchResults">
            <p className="summaryText">{summaryText}</p>
            <SearchNavigation totalPages={totalPages} resultsPerPage={resultsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div id="searchItemsContainer">
                {currentView.map(itemID => <SearchResultItem key={"item_" + itemID} itemID={itemID} />)}
            </div>
            <SearchNavigation totalPages={totalPages} resultsPerPage={resultsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default SearchResults;