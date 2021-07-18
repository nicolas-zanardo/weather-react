import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import {FormWeather, ResultWeather} from "./components";



export default class App extends Component<{}, {}> {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path={"/:city"} component={ResultWeather}/>
                    <Route component={FormWeather}/>
                </Switch>
            </Router>
        );
    }
}

