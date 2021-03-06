import Card from "../Card";
import React from "react";

const Collection = ({collection}) => {
    const collectionDetails = collection.cardDetails;
    return (
        <div className="Collection">
            <div className="Collection__name">{collection.cardRarity}</div>
            <div className="grid-container">
                {collectionDetails.map((card) => {
                    return <Card key={card.cardId} card={card}/>;
                })}
            </div>
        </div>
    );
}

export default Collection
