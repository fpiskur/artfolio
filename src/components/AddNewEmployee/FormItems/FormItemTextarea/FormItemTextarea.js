import React from 'react';
import itemStyles from '../../../../components/AddNewEmployee/FormItems/formItems.module.css';

function FormItemTextarea (props) {

    let properties;
    let counter = null;
    switch (props.type) {
        case 'short':
            properties = {
                rows: '5',
                maxLength: '167'
            };
            counter = <span style={{ alignSelf: 'flex-end' }}>
                            characters left: <strong>{ 167 - props.value.length }</strong>
                        </span>
            break;
        case 'about':
            properties = {
                rows: '12'
            };
            break;
        default:
            properties = {
                rows: '12'
            };
    }

    return (
        <div className={ itemStyles.formItem }>
            <label htmlFor={ props.id }>{ props.label }</label>
            <textarea
                { ...properties }
                id={ props.id }
                placeholder={ props.placeholder }
                value={ props.value }
                onChange={ (event) => props.changed(event.target.value, props.id) }></textarea>
            { counter }
        </div>
    );
}

export default FormItemTextarea;