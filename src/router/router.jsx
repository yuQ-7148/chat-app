import React from "react";

import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'
import HomePage from "../page/home/homepage";


export default function MainRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>

    )
}