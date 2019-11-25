import React from 'react';
import styles from './SkillsMenu.module.css';

import SkillCheckbox from './SkillCheckbox/SkillCheckbox';

function SkillsMenu (props) {

    let musicalSkillsList = null, actingSkillsList = null, dancingSkillsList = null;
    let menuContent = <p className={ styles.loading }>loading skills...</p>;

    if (props.skills) {

        let musicalSkills = [], actingSkills = [], dancingSkills = [];
        let skillsList = Object.entries(props.skills);
        skillsList.forEach(skill => {
            if (skill[1] === 'musical') musicalSkills.push(skill[0]);
            if (skill[1] === 'acting') actingSkills.push(skill[0]);
            if (skill[1] === 'dancing') dancingSkills.push(skill[0]);
        });
        musicalSkillsList = musicalSkills.map(skill => (
            <li key={ skill }>
                <SkillCheckbox
                    isChecked={ props.selectedSkills.includes(skill) ? true : false }
                    change={ props.handleSelectSkill }
                    skill={ skill } />
            </li>
        ));
        actingSkillsList = actingSkills.map(skill => (
            <li key={ skill }>
                <SkillCheckbox
                    isChecked={ props.selectedSkills.includes(skill) ? true : false }
                    change={ props.handleSelectSkill }
                    skill={ skill } />
            </li>
        ));
        dancingSkillsList = dancingSkills.map(skill => (
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
                            { musicalSkillsList }
                        </ul>
                    </div>
                    <div>
                        <h3>Acting</h3>
                        <ul className={ styles.skillsList }>
                            { actingSkillsList }
                        </ul>
                    </div>
                    <div>
                        <h3>Dancing</h3>
                        <ul className={ styles.skillsList }>
                            { dancingSkillsList }
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