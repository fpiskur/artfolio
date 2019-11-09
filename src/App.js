import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import AddNewEmployee from './containers/AddNewEmployee/AddNewEmployee';
import ProfilePage from './containers/ProfilePage/ProfilePage';

function App () {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/add-new-employee" component={ AddNewEmployee } />
                    <Route path="/employee" component={ ProfilePage } />  {/* TEMPORARY ROUTE */}
                    <Route exact path="/" component={ HomePage } />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
