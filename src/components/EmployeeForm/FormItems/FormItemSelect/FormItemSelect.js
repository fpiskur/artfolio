import React from 'react';
import itemStyles from '../formItems.module.css';
import styles from './FormItemSelect.module.css';

function FormItemSelect (props) {

    const options = props.options.map(option => (
        <option key={ option } value={ option.startsWith('--') ? '' : option }>{ option }</option>
    ));

    return (
        <div className={ `${itemStyles.formItem} ${styles.FormItemSelect}` }>
            <label htmlFor={ props.id }>{ props.label }</label>
            <select value={ props.value } onChange={ (event) => props.changed(event.target.value, props.id) } id={ props.id }>
                { options }
            </select>
        </div>
    );
}

export default FormItemSelect;