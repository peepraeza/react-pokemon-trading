import "./App.css";
import Landing from "./components/Landing";
import React from "react";
import {Route, Switch} from 'react-router-dom'
import CardDetail from "./components/Card-Detail";

const App = () => {
    return (
        <Switch>
            <Route exact path='/'><Landing/></Route>
            <Route path="/card/:id" component={CardDetail}/>
        </Switch>
    );
}

export default App;
