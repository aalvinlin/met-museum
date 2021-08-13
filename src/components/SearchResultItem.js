import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchResultItem = ({itemID}) => {

    const [itemDetails, setItemDetails] = useState({});
    
    useEffect(() => {

        axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + itemID)
            .then(results => setItemDetails(results.data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="searchResultItem">
            <img src={itemDetails.primaryImageSmall} alt={itemDetails.title} />
            <div className="itemInfoBox">
                <p className="itemTitle">{itemDetails.title}</p>
                <p className="itemArtist">{itemDetails.artistDisplayName}</p>
                
            </div>
        </div>
    )
}

export default SearchResultItem;