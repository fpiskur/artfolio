import React, { Component } from 'react';
import './App.css';
import axios from './axios';

import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeListHeader from './containers/EmployeeListHeader/EmployeeListHeader';
import Spinner from './components/UI/Spinner';


class App extends Component {

    state = {
        comedians: [],
        availabilityFilter: 'All',
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

    handleAvailabilityFilter = (event) => {
        this.setState({ availabilityFilter: event.target.value });
    }

    render () {

        let filteredComedians;
        switch (this.state.availabilityFilter) {
            case 'All':
                filteredComedians = this.state.comedians;
                break;
            case 'Available':
                filteredComedians = this.state.comedians.filter(comedian => comedian.availability === 'Available');
                break;
            case 'Not available':
                filteredComedians = this.state.comedians.filter(comedian => comedian.availability === 'Not available');
                break;
            default:
                filteredComedians = this.state.comedians;
        }

        return (
            <div className="App">
                <EmployeeListHeader applyAvailabilityFilter={ this.handleAvailabilityFilter } />
                { this.state.comedians[0] ?
                <EmployeeList comedians={ filteredComedians } /> :
                <Spinner /> }
            </div>
        );
    }
}

export default App;
