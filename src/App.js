import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import AddNewEmployee from './containers/AddNewEmployee/AddNewEmployee';

function App () {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/add-new-employee" component={ AddNewEmployee } />
                    <Route exact path="/" component={ HomePage } />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
