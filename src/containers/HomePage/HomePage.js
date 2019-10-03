import React, { Component } from 'react';
import axios from '../../axios';

import TopBar from '../../components/UI/TopBar/TopBar';
import EmployeeList from '../../components/HomePage/EmployeeList/EmployeeList';
import EmployeeListHeader from '../../components/HomePage/EmployeeListHeader/EmployeeListHeader';
import Spinner from '../../components/UI/Spinner/Spinner';


class HomePage extends Component {

    state = {
        comedians: [],
        searchTerm: '',
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

    handleSearchSubmit = (searchTerm) => {
        this.setState({ searchTerm: searchTerm, availabilityFilter: 'All', skillsFilter: [] });
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

        // Availability filter
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

        // Skills filter
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

        // Search filter
        if (this.state.searchTerm) {
            filteredComedians = filteredComedians.filter(comedian => {
                if (
                    comedian.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                    comedian.profession.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                    ) {
                    return true;
                } else {
                    return false;
                }
            });
        }

        return (
            <div>
                <TopBar addNew />
                <EmployeeListHeader
                    availabilityChecked={ this.state.availabilityFilter }
                    submitSearch={ this.handleSearchSubmit }
                    applyAvailabilityFilter={ this.handleAvailabilityFilter }
                    applySkillsFilter={ this.handleSkillsFilter }
                    clearSkillsFilter={ this.clearSkillsFilter }
                    selectedSkills={ this.state.skillsFilter } />

                { this.state.comedians[0] ?
                <EmployeeList comedians={ filteredComedians } /> :
                <Spinner /> }
            </div>
        );
    }
}

export default HomePage;
