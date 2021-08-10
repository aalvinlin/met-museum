import React from "react";

const SearchNavigation = ({totalPages, resultsPerPage, currentPage, setCurrentPage}) => {

    // create array to map over
    let pageLinks = [];

    const maxLinksToShow = 9;

    // display all pages if there aren't that many
    if (totalPages <= maxLinksToShow)
        {
            for (let i = 0; i < totalPages; i += 1)
                { pageLinks[i] = i + 1; }
        }
    // show first few pages, starting from 1
    else if (currentPage <= Math.ceil(maxLinksToShow / 2))
        {
            for (let i = 0; i < maxLinksToShow; i += 1)
                { pageLinks[i] = i + 1; }
        }
    // show last few pages
    else if (currentPage >= totalPages - maxLinksToShow)
        {
            for (let i = totalPages - maxLinksToShow + 1; i <= totalPages; i += 1)
                { pageLinks[i] = i + 1; }
        }
    // show pages around current page number
    else
        {
            const lowerBound = currentPage - Math.ceil(maxLinksToShow / 2);
            const upperBound = currentPage + Math.floor(maxLinksToShow / 2);

            for (let i = lowerBound; i < upperBound; i += 1)
                { pageLinks[i] = i + 1; }
        }

    const handlePrevClick = () => {
        if (currentPage > 1)
            { setCurrentPage(currentPage - 1); }
    }

    const handleNextClick = () => {
        if (currentPage < totalPages)
            { setCurrentPage(currentPage + 1); }
    }

    const handleNewPageClick = newPage => {
        if (currentPage !== newPage)
            { setCurrentPage(newPage); }
    }

    return (
        <div class="searchNavigation">
            <span className={ currentPage > 1 ? "pagePrev" : "pagePrev navDisabled"} onClick={handlePrevClick}> Prev </span>
            {pageLinks.map(page => {

                return <span key={`pageLink_${page}`} className={page === currentPage ? "pageLink currentPage" : "pageLink"} onClick={() => handleNewPageClick(page)}> {page} </span>;

            })}
            <span className={ currentPage < totalPages ? "pageNext" : "pageNext navDisabled"} onClick={handleNextClick}> Next </span>
        </div>
    )

}

export default SearchNavigation;