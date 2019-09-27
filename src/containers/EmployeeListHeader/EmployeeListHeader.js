import React, { Component } from 'react';
import styles from './EmployeeListHeader.module.css';
import axios from '../../axios';

import SkillsMenu from '../../components/EmployeeListHeader/SkillsMenu/SkillsMenu';

class EmployeeListHeader extends Component {

    state = {
        skillsList: null,
        skillsFilter: [],
        menuVisible: false,
        error: false
    }

    componentDidMount () {
        axios.get('/skillsList.json')
            .then(response => {
                this.setState({ skillsList: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

    toogleMenu = () => {
        this.setState((prevState) => ({ menuVisible: !prevState.menuVisible }));
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

    render () {

        return (
            <div className={ styles.EmployeeListHeader }>
                <div className={ styles.topBar }>
                    <button className={ styles.homeBtn }>HOME</button>
                    <button className={ styles.addNewBtn }>Add New Employee</button>
                </div>
                <div className={ styles.search }>
                    <input type="text" placeholder="Search by name or event" />
                    <button>Search</button>
                </div>
                <div className={ styles.activeFilter }>
                    <input
                        type="radio"
                        name="availability"
                        id="all"
                        value="All"
                        onChange={ this.props.applyAvailabilityFilter }
                        defaultChecked />
                    <label htmlFor="all">All</label>|
                    <input
                        type="radio"
                        name="availability"
                        id="available"
                        value="Available"
                        onChange={ this.props.applyAvailabilityFilter } />
                    <label htmlFor="available">Available</label>|
                    <input
                        type="radio"
                        name="availability"
                        id="not-available"
                        value="Not available"
                        onChange={ this.props.applyAvailabilityFilter } />
                    <label htmlFor="not-available">Not available</label>
                </div>
                <div>
                    <button onClick={ this.toogleMenu } className={ styles.showSkillsBtn }>
                        <span>Chosen skills <small>
                            { this.state.skillsFilter[0] ?
                                '(' + this.state.skillsFilter.join(', ') + ')' :
                                null }</small></span>
                        {
                        this.state.menuVisible ?
                            <span className={ styles.arrow }>&#9650;</span> : // up arrow
                            <span className={ styles.arrow }>&#9660;</span>   // down arrow
                        }
                    </button>
                    {
                    this.state.menuVisible ?
                        <SkillsMenu handleSelectSkill={ this.handleSkillsFilter } skills={ this.state.skillsList } /> :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default EmployeeListHeader;