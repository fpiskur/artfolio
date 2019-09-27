import React, { Component } from 'react';
import styles from './EmployeeListHeader.module.css';
import axios from '../../axios';

import SkillCheckbox from '../../components/EmployeeListHeader/SkillCheckbox/SkillCheckbox';

class EmployeeListHeader extends Component {

    state = {
        skillsList: null,
        skillsFilter: [],
        availabilityFilter: "All",
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

    render () {

        let musicalSkills = null, actingSkills = null, dancingSkills = null;

        if (this.state.skillsList) {
            musicalSkills = this.state.skillsList.musical.map(skill => (
                <li key={ skill }>
                    <SkillCheckbox skill={ skill } />
                </li>
            ));
            actingSkills = this.state.skillsList.acting.map(skill => (
                <li key={ skill }>
                    <SkillCheckbox skill={ skill } />
                </li>
            ));
            dancingSkills = this.state.skillsList.dancing.map(skill => (
                <li key={ skill }>
                    <SkillCheckbox skill={ skill } />
                </li>
            ));
        }

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
                    <button className={ styles.active }>All</button>|
                    <button>Available</button>|
                    <button>Not Available</button>
                </div>
                <div>
                    <button className={ styles.showSkillsBtn }>
                        <span>Chosen skills <small>(waltz, drama, comedy, action, horror, swing, triangle, contemporary)</small></span>
                        <span className={ styles.arrow }>&#9660;</span>
                    </button>
                    <div className={ styles.skillsMenu }>
                        <button>Clear all</button>
                        <div className={ styles.skillsListWrapper }>
                            <div>
                                <h3>Musical</h3>
                                <ul className={ styles.skillsList }>
                                    { musicalSkills }
                                </ul>
                            </div>
                            <div>
                                <h3>Acting</h3>
                                <ul className={ styles.skillsList }>
                                    { actingSkills }
                                </ul>
                            </div>
                            <div>
                                <h3>Dancing</h3>
                                <ul className={ styles.skillsList }>
                                    { dancingSkills }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeListHeader;