import React from 'react';

function SkillCheckbox (props) {

    const skillId = props.skill.replace(/\s/g, '');

    return (
        <React.Fragment>
            <input id={ skillId } type="checkbox" />
            <label htmlFor={ skillId }>{ props.skill }</label>
        </React.Fragment>
    );
}

export default SkillCheckbox;