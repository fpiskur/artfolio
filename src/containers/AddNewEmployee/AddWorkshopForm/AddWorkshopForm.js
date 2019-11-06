import React, { Component } from 'react';
import styles from './AddWorkshopForm.module.css';

import FormItemText from '../../../components/AddNewEmployee/FormItems/FormItemText/FormItemText';
import FormItemSelect from '../../../components/AddNewEmployee/FormItems/FormItemSelect/FormItemSelect';

class AddWorkshopForm extends Component {

    state = {
        workshop: '',
        teacher: '',
        month: '',
        year: ''
    };

    inputChangeHandler = (value, id) => {
        this.setState({ [id]: value });
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        if (!this.state.month || !this.state.year) return;
        this.props.submitForm(this.state, this.props.id);
    }

    render () {

        const currentYear = new Date().getFullYear();
        let availableMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let availableYears = [];
        for (let year = currentYear - 100; year <= currentYear; year++) {
            availableYears.push(year.toString());
        }

        return (
            <React.Fragment>
                <h3>Add New Workshop</h3>
                <form>
                    <FormItemText
                        id="workshop"
                        label="Workshop name"
                        placeholder="Workshop name"
                        value={ this.state.workshop }
                        changed={ this.inputChangeHandler } />
                    <FormItemText
                        id="teacher"
                        label="Teacher"
                        placeholder="Teacher"
                        value={ this.state.teacher }
                        changed={ this.inputChangeHandler } />
                    <div className={ styles.date }>
                        <FormItemSelect
                            id="month"
                            label="Month:"
                            options={ [ '-- month --', ...availableMonths ] }
                            value={ this.state.month }
                            changed={ this.inputChangeHandler } />
                        <FormItemSelect
                            id="year"
                            label="Year:"
                            options={ [ '-- year --', ...availableYears ] }
                            value={ this.state.year }
                            changed={ this.inputChangeHandler } />
                    </div>
                    
                    <button onClick={ this.formSubmitHandler }>Add Workshop</button>
                </form>
            </React.Fragment>
        );
    }
}

export default AddWorkshopForm;