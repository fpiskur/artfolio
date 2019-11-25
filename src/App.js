import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import EmployeeForm from './containers/EmployeeForm/EmployeeForm';
import ProfilePage from './containers/ProfilePage/ProfilePage';

function App () {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/add-new-employee" component={ EmployeeForm } />
                    <Route path="/employees/edit/:username" component={ EmployeeForm } />
                    <Redirect from="/employees/edit" to="/employees" />
                    <Route path="/employees/:username" component={ ProfilePage } />
                    <Route exact path="/employees" component={ HomePage } />
                    <Redirect from="/" to="/employees" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
