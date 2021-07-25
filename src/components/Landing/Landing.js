import React, {useEffect, useState} from "react";
import './style.css'
import {getBoxDetailById, getLanding} from "../../services/box.service";
import Collection from "../Collection";


const Landing = () => {
    const [listCardCollection, setListCardCollection] = useState([]);
    const [data, setData] = useState({
        boxId: ""
    });
    useEffect(() => {
        async function fetchData() {
            let response = await getLanding();
            setListCardCollection(response.rarities)
        }

        fetchData();
    }, []);

    console.log(listCardCollection);

    const submit = async (e) => {
        e.preventDefault()
        const response = await getBoxDetailById(data.boxId)
        console.log('resp', response)
        setListCardCollection(response.rarities);
    }

    const handle = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <div>
            <div>
                <form onSubmit={(e) => submit(e)} style={{ textAlign: 'center' }}>
                    <text>BoxId:</text>
                    <input onChange={(e) => handle(e)} id={`boxId`} value={data.boxId} placeholder={`boxId`}
                           type={`text`}/>
                    <button>Submit</button>
                </form>
            </div>
            <br/>
            {listCardCollection.map((collection, i) => {
                return <Collection key={i} collection={collection}/>;
            })}

        </div>
    );
}

export default Landing;
