import React, { useState } from "react";
import SearchNavigation from "./SearchNavigation";

const SearchResults = ({dataRetrieved}) => {

    const {total, objectIDs} = dataRetrieved;
    const [currentPage, setCurrentPage] = useState(1);

    if (Object.keys(dataRetrieved).length === 0)
        { return <div id="searchResults"></div>; }

    console.log(dataRetrieved);

    let summaryText = "No results found."

    if (total > 0)
        { summaryText = `Found ${total.toLocaleString()} results.`; }

    const resultsPerPage = 12;
    const totalPages = Math.ceil(total / resultsPerPage);

    return (
        <div id="searchResults">
            <p class="summaryText">{summaryText}</p>
            <SearchNavigation totalPages={totalPages} resultsPerPage={resultsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {/* {objectIDs ? objectIDs.map(id => <p key={`result_${id}`}>{id}</p>) : <></>} */}
            <SearchNavigation totalPages={totalPages} resultsPerPage={resultsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default SearchResults;