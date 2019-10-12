import React, { Component } from 'react';
import itemStyles from '../../../../components/AddNewEmployee/FormItems/formItems.module.css';
import styles from './FormItemNestedList.module.css';

import NestedListItem from '../../../../components/AddNewEmployee/FormItems/NestedListItem/NestedListItem';

class FormItemNestedList extends Component {

    state = {
        value: '',
        category: ''
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ value: value });
    }

    handleSelectChange = (event) => {
        const category = event.target.value;
        this.setState({ category: category });
    }

    handleSkillSubmit = (event) => {
        event.preventDefault();
        if (this.props.items[this.state.category].includes(this.state.value)) {
            return;
        } else {
            let newSkillsList = this.props.items;
            newSkillsList[this.state.category].concat(this.state.value);
            this.props.changed(newSkillsList, 'skills');
        }
    }

    render () {
        let listItems = Object.keys(this.props.items).map(category => (
            this.props.items[category] ?
                <NestedListItem
                    key={ category }
                    category={ category.toUpperCase() + ':' }
                    items={ this.props.items[category] } /> :
                null
        ));

        const categoryItems = Object.keys(this.props.items).map(category => (
            <option key={ category } value={ category }>{ category }</option>
        ));
    
        return (
            <div className={ itemStyles.formItem }>
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <div className={ styles.addSkill }>
                    <input
                        id={ this.props.id }
                        type="text"
                        placeholder={ this.props.placeholder }
                        value={ this.state.value }
                        onChange={ this.handleInputChange } />
                    <select value={ this.state.category } onChange={ this.handleSelectChange }>
                        <option value="">--category--</option>
                        { categoryItems }
                    </select>
                    <button onClick={ this.handleSkillSubmit }>Add skill</button>
                </div>
                <div className={ styles.skills }>
                    { listItems }
                </div>
            </div>
        );
    }
}

export default FormItemNestedList;