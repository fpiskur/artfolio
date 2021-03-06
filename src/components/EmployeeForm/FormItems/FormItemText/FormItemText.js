import React from 'react';
import itemStyles from '../formItems.module.css';

function FormItemText (props) {
    return (
        <div className={ itemStyles.formItem }>
            <label htmlFor={ props.id }>{ props.label }</label>
            <input
                id={ props.id }
                type="text"
                placeholder={ props.placeholder}
                value={ props.value }
                onChange={ (event) => props.changed(event.target.value, props.id) } />
        </div>
    );
}

export default FormItemText;