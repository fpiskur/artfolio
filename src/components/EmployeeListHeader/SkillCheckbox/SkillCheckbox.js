import React from 'react';

function SkillCheckbox (props) {

    const skillId = props.skill.replace(/\s/g, '');

    return (
        <input id={ skillId } type="checkbox" />
        <label htmlFor={ skillId }>{ props.skill }</label>
    );
}

export default SkillCheckbox;