import React from 'react';
import styles from './SkillsMenu.module.css';

import SkillCheckbox from './SkillCheckbox/SkillCheckbox';
import Spinner from '../../UI/Spinner';

function SkillsMenu (props) {

    let musicalSkills = null, actingSkills = null, dancingSkills = null;
    let menuContent = <Spinner />;

    if (props.skills) {
        musicalSkills = props.skills.musical.map(skill => (
            <li key={ skill }>
                <SkillCheckbox
                    isChecked={ props.selectedSkills.includes(skill) ? true : false }
                    change={ props.handleSelectSkill }
                    skill={ skill } />
            </li>
        ));
        actingSkills = props.skills.acting.map(skill => (
            <li key={ skill }>
                <SkillCheckbox
                    isChecked={ props.selectedSkills.includes(skill) ? true : false }
                    change={ props.handleSelectSkill }
                    skill={ skill } />
            </li>
        ));
        dancingSkills = props.skills.dancing.map(skill => (
            <li key={ skill }>
                <SkillCheckbox
                    isChecked={ props.selectedSkills.includes(skill) ? true : false }
                    change={ props.handleSelectSkill }
                    skill={ skill } />
            </li>
        ));

        menuContent = (
            <React.Fragment>
                <button onClick={ props.clearSkills }>Clear all</button>
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
            </React.Fragment>
        );
    }

    return (
        <div className={ styles.SkillsMenu }>
            { menuContent }
        </div>
    );
}

export default SkillsMenu;