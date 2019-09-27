import React, { Component } from 'react';
import './App.css';
import axios from './axios';

import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeListHeader from './components/EmployeeList/EmployeeListHeader/EmployeeListHeader';
import Spinner from './components/UI/Spinner';


class App extends Component {

    state = {
        comedians: [],
        error: false
    };

    componentDidMount () {
        axios.get('/comedians.json')
        .then(response => {
            this.setState({ comedians: response.data });
        })
        .catch(error => {
            this.setState({ error: true });
        });
    }

    render () {  
        return (
            <div className="App">
                <EmployeeListHeader />
                { this.state.comedians[0] ?
                    <EmployeeList comedians={ this.state.comedians } /> :
                    <Spinner /> }
            </div>
        );
    }
}

export default App;
