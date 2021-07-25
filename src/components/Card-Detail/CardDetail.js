import React, {useEffect, useState} from "react";
import './style.css'
import {getCardDetails} from "../../services/card.service";
import {useParams} from 'react-router-dom'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import {
    Container,
    Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardDetail = () => {
    const {id} = useParams();
    const [cardDetail, setCardDetail] = useState({});
    const cardId = id;
    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 599, pv: 2400, amt: 2400},
        {name: 'Page C', uv: 344, pv: 2400, amt: 2400},
        {name: 'Page D', uv: 233, pv: 2400, amt: 2400},
        {name: 'Page E', uv: 122, pv: 2400, amt: 2400}
    ];

    useEffect(() => {
        async function fetchData() {
            let response = await getCardDetails(cardId);
            setCardDetail(response);
        }

        fetchData();
    }, []);

    let pageDetail;
    if (cardDetail) {
        pageDetail = (
            <div>
                <div className="container-detail">
                    <div className="Card_Detail__name">
                        <h2>{cardDetail.cardName}</h2>
                    </div>
                    <div className="Card_Detail">
                        <div>
                            <img className="Card_Detail__img"
                                 src='https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_Trading_Card_Game_cardback.jpg'
                                 alt=""/>
                        </div>

                        <div className="Card_Detail__data">
                            <Container>
                                <Row className="Card_Detail__row">
                                    <Col className="Card_Detail__title">Rarity</Col>
                                    <Col className="Card_Detail__value">{cardDetail.cardRarity}</Col>
                                </Row>
                                <Row className="Card_Detail__row">
                                    <Col className="Card_Detail__title">Available items</Col>
                                    <Col className="Card_Detail__value">{cardDetail.cardRemaining}</Col>
                                </Row>
                                <Row className="Card_Detail__row">
                                    <Col className="Card_Detail__title">Price</Col>
                                    <Col className="Card_Detail__value">{cardDetail.cardPrice} ¥</Col>
                                </Row>
                                <Row className="Card_Detail__row">
                                    <Col className="Card_Detail__title">Serial</Col>
                                    <Col className="Card_Detail__value">{cardDetail.cardSerial}</Col>
                                </Row>
                                <Row className="Card_Detail__row">
                                    <Col className="Card_Detail__title">Type</Col>
                                    <Col
                                        className="Card_Detail__value">{cardDetail.cardType == null ? 'xx' : cardDetail.cardType}</Col>
                                </Row>
                                <Row className="Card_Detail__row">
                                    <Col className="Card_Detail__title">SubType</Col>
                                    <Col
                                        className="Card_Detail__value">{cardDetail.cardSubType == null ? 'xx' : cardDetail.cardSubType}</Col>
                                </Row>
                                <Row className="Card_Detail__row">
                                    <Col className="Card_Detail__title">Price Trend</Col>
                                    <Col className="Card_Detail__value">0 ¥</Col>
                                </Row>
                                <Row className="Card_Detail__row">
                                    <Col className="Card_Detail__title">30-days average price</Col>
                                    <Col className="Card_Detail__value">0 ¥</Col>
                                </Row>
                                <Row className="Card_Detail__row">
                                    <Col className="Card_Detail__title">7-days average price</Col>
                                    <Col className="Card_Detail__value">0 ¥</Col>
                                </Row>
                                <Row className="Card_Detail__row">
                                    <Col className="Card_Detail__title">1-day average price</Col>
                                    <Col className="Card_Detail__value">0 ¥</Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="Card_Detail__graph">
                            <LineChart width={450} height={300} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>
                        </div>
                        {/*<Container>*/}
                        {/*    <Row>*/}
                        {/*        <Col xs="3">.col-3</Col>*/}
                        {/*        <Col xs="auto">.col-auto - variable width content</Col>*/}
                        {/*        <Col xs="3">.col-3</Col>*/}
                        {/*    </Row>*/}
                        {/*</Container>*/}

                        {/*<p>{cardDetail.boxId}</p>*/}
                        {/*<p>{cardDetail.boxName}</p>*/}
                    </div>
                </div>
            </div>

        )
    } else {
        <p>test test</p>
    }

    return (
        <div>
            {pageDetail}
        </div>

    );
}

export default CardDetail;
