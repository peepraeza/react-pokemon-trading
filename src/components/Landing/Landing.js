import React, {useEffect, useState} from "react";
import Card from '../Card'
import './style.css'
import {getCardDetails} from "../../services/card.service";
import {getLanding} from "../../services/box.service";
import {Route, Switch} from "react-router-dom";
import CardDetail from "../card-detail";

const [loading, setLoading] = useState(true);
const [listCardCollection, setListCardCollection] = useState([]);


useEffect(() => {
    async function fetchData() {
        let response = await getLanding();
        console.log('pee:', response)
        setListCardCollection(response.rarities)
        console.log(listCardCollection)
        setLoading(false);
    }

    fetchData();
}, []);

console.log(listCardCollection);

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
    return (
        <div>
            {listCardCollection.map((collection, i) => {
                return <Collection key={i} collection={collection}/>;
            })}

        </div>
    );
}

export default Collection;
