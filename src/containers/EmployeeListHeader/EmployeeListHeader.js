import React, { Component } from 'react';
import styles from './EmployeeListHeader.module.css';
import axios from '../../axios';

class EmployeeListHeader extends Component {

    state = {
        skillsList: {},
        skillsFilter: [],
        availabilityFilter: "All",
        error: false
    }

    componentDidMount () {
        axios.get('/skillsList.json')
            .then(response => {
                this.setState({ skillsFilter: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
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
                        <ul className={ styles.skillsList }>
                            <li>
                                <input id="contemporary" type="checkbox" />
                                <label htmlFor="contemporary">contemporary dancing</label>
                            </li>
                            <li>
                                <input id="triangle" type="checkbox" />
                                <label htmlFor="triangle">triangle</label>
                            </li>
                            <li>
                                <input id="waltz" type="checkbox" />
                                <label htmlFor="waltz">waltz</label>
                            </li>
                            <li>
                                <input id="beatboxing" type="checkbox" />
                                <label htmlFor="beatboxing">beat-boxing</label>
                            </li>
                            <li>
                                <input id="action" type="checkbox" />
                                <label htmlFor="action">action</label>
                            </li>
                            <li>
                                <input id="comedy" type="checkbox" />
                                <label htmlFor="comedy">comedy</label>
                            </li>
                            <li>
                                <input id="drama" type="checkbox" />
                                <label htmlFor="drama">drama</label>
                            </li>
                            <li>
                                <input id="guitar" type="checkbox" />
                                <label htmlFor="guitar">guitar</label>
                            </li>
                            <li>
                                <input id="bass" type="checkbox" />
                                <label htmlFor="bass">bass</label>
                            </li>
                            <li>
                                <input id="trumpet" type="checkbox" />
                                <label htmlFor="trumpet">trumpet</label>
                            </li>
                            <li>
                                <input id="ballet" type="checkbox" />
                                <label htmlFor="ballet">ballet</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeListHeader;