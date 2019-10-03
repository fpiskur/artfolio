import React, { Component } from 'react';
import itemStyles from '../../../../components/AddNewEmployee/FormItems/formItems.module.css';

class FormItemTextarea extends Component {

    state = {
        charCounter: 167,
        textInput: '' // ovaj input treba dolazit iz AddNewEmployee
    }

    handleCounterChange = (event) => {
        const textInput = event.target.value;
        this.setState({ textInput: textInput, charCounter: 167 - textInput.length });  // textInput treba maknut
    }

    render () {

        let properties;
        let counter = null;
        switch (this.props.type) {
            case 'short':
                properties = {
                    rows: '6',
                    maxLength: '167',
                    onChange: this.handleCounterChange // ova metoda treba dolazit iz AddNewEmployee
                };
                counter = <span style={{ alignSelf: 'flex-end' }}>
                                characters left: <strong>{ this.state.charCounter }</strong>
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
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <textarea
                    { ...properties }
                    id={ this.props.id }
                    placeholder={ this.props.placeholder }
                    value={ this.state.textInput }></textarea>
                { counter }
            </div>
        );
    }
}

export default FormItemTextarea;