import React, { Component } from 'react';
import styles from './AddEducationForm.module.css';

import FormItemText from '../../../components/AddNewEmployee/FormItems/FormItemText/FormItemText';
import FormItemSelect from '../../../components/AddNewEmployee/FormItems/FormItemSelect/FormItemSelect';

class AddEducationForm extends Component {

    state = {
        institution: '',
        title: '',
        startYear: '',
        endYear: ''
    };

    inputChangeHandler = (value, id) => {
        this.setState({ [id]: value });
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        if (!this.state.startYear || !this.state.endYear) return;
        this.props.submitForm(this.state, this.props.id);
    }

    render () {

        const currentYear = new Date().getFullYear();
        let availableYears = [];
        for (let year = currentYear - 100; year <= currentYear; year++) {
            availableYears.push(year.toString());
        }

        return (
            <React.Fragment>
                <h3>Add New Education</h3>
                <form>
                    <FormItemText
                        id="institution"
                        label="School name"
                        placeholder="School name"
                        value={ this.state.institution }
                        changed={ this.inputChangeHandler } />
                    <FormItemText
                        id="title"
                        label="Your title"
                        placeholder="Your title"
                        value={ this.state.title }
                        changed={ this.inputChangeHandler } />
                    <div className={ styles.dates }>
                        <FormItemSelect
                            id="startYear"
                            label="Start year:"
                            options={ [ '-- start year --', ...availableYears ] }
                            value={ this.state.startYear }
                            changed={ this.inputChangeHandler } />
                        <FormItemSelect
                            id="endYear"
                            label="End year:"
                            options={ [ '-- end year --', ...availableYears, 'today' ] }
                            value={ this.state.endYear }
                            changed={ this.inputChangeHandler } />
                    </div>
                    
                    <button onClick={ this.formSubmitHandler }>Add Education</button>
                </form>
            </React.Fragment>
        );
    }
}

export default AddEducationForm;