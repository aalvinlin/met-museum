import React from "react";

const SearchNavigation = ({totalPages, resultsPerPage, currentPage}) => {

    // create array to map over
    let pageLinks = [];

    for (let i = 0; i < totalPages; i += 1)
        { pageLinks[i] = i; }

    return (
        <div class="searchNavigation">
            {pageLinks.map(page => {

                return <span key={`pageLink_${page}`}>{page}</span>

            })}
        </div>
    )

}

export default SearchNavigation;