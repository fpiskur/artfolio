import React from 'react';
import itemStyles from '../formItems.module.css';

function FormItemSelect (props) {

    const options = props.options.map(option => (
        <option key={ option } value={ option }>{ option }</option>
    ));

    return (
        <div className={ itemStyles.formItem } style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <label htmlFor={ props.id } style={{ marginRight: '2em' }}>{ props.label }</label>
            <select value={ props.value } onChange={ (event) => props.changed(event.target.value, props.id) } id={ props.id }>
                { options }
            </select>
        </div>
    );
}

export default FormItemSelect;