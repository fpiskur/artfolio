import React from 'react';
import itemStyles from '../formItems.module.css';

function FormItemDate (props) {
    return (
        <div className={ itemStyles.formItem }>
            <label htmlFor={ props.id }>{ props.label }</label>
            <input
                type="date" value={ props.value }
                onChange={ (event) => props.changed(event.target.value, props.id) }
                id={ props.id } />
        </div>
    );
}

export default FormItemDate;