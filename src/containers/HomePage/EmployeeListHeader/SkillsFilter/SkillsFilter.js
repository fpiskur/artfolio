import React, { Component } from 'react';
import styles from './SkillsFilter.module.css';
// import axios from '../../../../axios';
import { artfoliodb } from '../../../../firebase';

import SkillsMenu from '../../../../components/HomePage/EmployeeListHeader/SkillsMenu/SkillsMenu';

class SkillsFilter extends Component {

    state = {
        skillsList: null,
        menuVisible: false,
        error: false
    }

    componentDidMount () {
        // axios.get('/skillsList.json')
        //     .then(response => {
        //         this.setState({ skillsList: response.data });
        //     })
        //     .catch(error => {
        //         this.setState({ error: true });
        //     });

        artfoliodb.collection('skills-list').doc('skills-list').get()
            .then(snapshot => {
                if (snapshot && snapshot.exists) {
                    this.setState({ skillsList: snapshot.data() })
                }
            });
    }

    toogleMenu = () => {
        this.setState((prevState) => ({ menuVisible: !prevState.menuVisible }));
    }

    render () {
        return (
            <div>
                <button onClick={ this.toogleMenu } className={ styles.showSkillsBtn }>
                    <span>Chosen skills <small>
                        { this.props.selectedSkills[0] ?
                            '(' + this.props.selectedSkills.join(', ') + ')' :
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
                        selectedSkills={ this.props.selectedSkills }
                        clearSkills={ this.props.clearSkillsFilter } /> :
                    null
                }
            </div>
        );
    }
}

export default SkillsFilter;