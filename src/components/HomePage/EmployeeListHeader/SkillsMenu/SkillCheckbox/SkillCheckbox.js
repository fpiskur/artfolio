import React from 'react';
import styles from './SkillCheckbox.module.css';

function SkillCheckbox (props) {

    const skillId = props.skill.replace(/\s/g, '');

    return (
        <React.Fragment>
            <input
                className={ styles.checkboxInput }
                onChange={ props.change }
                value={ props.skill }
                id={ skillId }
                type="checkbox"
                checked={ props.isChecked } />
            <label
                className={ styles.checkboxLabel }
                htmlFor={ skillId }>
            { props.skill }</label>
        </React.Fragment>
    );
}

export default SkillCheckbox;