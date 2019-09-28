import React, { Component } from 'react';
import styles from './EmployeeListHeader.module.css';
import axios from '../../axios';

import SkillsMenu from '../../components/EmployeeListHeader/SkillsMenu/SkillsMenu';
import Search from './Search/Search';

class EmployeeListHeader extends Component {

    state = {
        skillsList: null,
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

    render () {

        return (
            <div className={ styles.EmployeeListHeader }>
                <div className={ styles.topBar }>
                    <button className={ styles.homeBtn }>HOME</button>
                    <button className={ styles.addNewBtn }>Add New Employee</button>
                </div>
                <Search submitSearch={ this.props.submitSearch } />
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
                            { this.props.skillsFilter[0] ?
                                '(' + this.props.skillsFilter.join(', ') + ')' :
                                '(none)' }</small></span>
                        {
                        this.state.menuVisible ?
                            <span className={ styles.arrow }>&#9650;</span> : // up arrow
                            <span className={ styles.arrow }>&#9660;</span>   // down arrow
                        }
                    </button>
                    {
                    this.state.menuVisible ?
                        <SkillsMenu
                            handleSelectSkill={ this.props.applySkillsFilter }
                            skills={ this.state.skillsList }
                            selectedSkills={ this.props.skillsFilter }
                            clearSkills={ this.props.clearSkillsFilter } /> :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default EmployeeListHeader;