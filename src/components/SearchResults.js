import React from "react";
import SearchNavigation from "./SearchNavigation";

const SearchResults = ({dataRetrieved}) => {

    const {total, objectIDs} = dataRetrieved;

    let summaryText = "No results found."

    if (total > 0)
        { summaryText = `Found ${total} results.`; }

    const resultsPerPage = 12;
    const totalPages = Math.ceil(total / resultsPerPage);

    return (
        <div id="searchResults">
            <SearchNavigation totalPages={totalPages} resultsPerPage={resultsPerPage} currentPage={1} />
            <p>{summaryText}</p>
            {/* {objectIDs ? objectIDs.map(id => <p key={`result_${id}`}>{id}</p>) : <></>} */}
            <SearchNavigation totalPages={totalPages} resultsPerPage={resultsPerPage} currentPage={1} />
        </div>
    );
}

export default SearchResults;