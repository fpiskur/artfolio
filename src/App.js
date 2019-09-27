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
        skillsFilter: [],
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

    handleSkillsFilter = (event) => {
        let skillsList;
        if (this.state.skillsFilter.includes(event.target.value)) {
            skillsList = this.state.skillsFilter.filter(skill => skill !== event.target.value);
        } else {
            skillsList = this.state.skillsFilter.concat(event.target.value);
        }
        this.setState({ skillsFilter: skillsList });
    }

    clearSkillsFilter = () => {
        this.setState({ skillsFilter: [] })
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

        if (this.state.skillsFilter.length) {
            this.state.skillsFilter.forEach(skill => {
                filteredComedians = filteredComedians.filter(comedian => {
                    for (let i = 0; i < comedian.skills.length; i++) {
                        if (comedian.skills[i].skillsList && comedian.skills[i].skillsList.includes(skill)) {
                            return true;
                        }
                    }
                    return false;
                });
            });
        }


        return (
            <div className="App">
                <EmployeeListHeader
                    applyAvailabilityFilter={ this.handleAvailabilityFilter }
                    applySkillsFilter={ this.handleSkillsFilter }
                    clearSkillsFilter={ this.clearSkillsFilter }
                    skillsFilter={ this.state.skillsFilter } />
                { this.state.comedians[0] ?
                <EmployeeList comedians={ filteredComedians } /> :
                <Spinner /> }
            </div>
        );
    }
}

export default App;
