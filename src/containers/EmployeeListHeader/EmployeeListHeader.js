import React, { Component } from 'react';
import styles from './EmployeeListHeader.module.css';
import axios from '../../axios';

import SkillsMenu from '../../components/EmployeeListHeader/SkillsMenu/SkillsMenu';

class EmployeeListHeader extends Component {

    state = {
        skillsList: null,
        skillsFilter: [],
        availabilityFilter: "All",
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
                    <button onClick={ this.toogleMenu } className={ styles.showSkillsBtn }>
                        <span>Chosen skills <small>(waltz, drama, comedy, action, horror, swing, triangle, contemporary)</small></span>
                        {
                        this.state.menuVisible ?
                            <span className={ styles.arrow }>&#9650;</span> : // up arrow
                            <span className={ styles.arrow }>&#9660;</span>   // down arrow
                        }
                    </button>
                    {
                    this.state.menuVisible ? <SkillsMenu skills={ this.state.skillsList } /> : null
                    }
                </div>
            </div>
        );
    }
}

export default EmployeeListHeader;