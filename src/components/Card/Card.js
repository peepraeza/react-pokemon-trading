import React from "react";
import './style.css'
import {Link, Route} from 'react-router-dom'
import CardDetail from "../Card-Detail/CardDetail";


const Card = ({card}) => {
    return (
        <div className="Card">
            <div className="Card__img">
                <img className="pokemon__img"
                     src='https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_Trading_Card_Game_cardback.jpg'
                     alt=""/>
            </div>
            <div className="Card__name">{card.cardName}</div>
            <div className="Card__types">{card.cardType}</div>
            <div className="Card__types">{card.cardSubTyoe}</div>
            <div className="Card__types">{card.cardSerial}</div>
            <div className="Card__button"><button><Link to={`card/${card.cardId}`} style={{ textDecoration: 'none' }}>Show Detail</Link></button></div>

            <Route path={`/card/${card.cardId}`}><CardDetail cardId={card.cardId}/></Route>
        </div>
    );
}

export default Card;
