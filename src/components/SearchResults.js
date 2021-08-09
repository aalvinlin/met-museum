import React from "react";

const SearchResults = ({dataRetrieved}) => {

    const {total, objectIDs} = dataRetrieved;

    let summaryText = "No results found."

    if (total > 0)
        { summaryText = `Found ${total} results.`; }

    return (
        <div id="searchResults">
            <p>{summaryText}</p>
            {objectIDs ? objectIDs.map(id => <p key={`result_${id}`}>{id}</p>) : <></>}
        </div>
    );
}

export default SearchResults;