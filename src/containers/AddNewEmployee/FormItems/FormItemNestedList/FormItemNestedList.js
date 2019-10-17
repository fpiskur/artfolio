import React, { Component } from 'react';
import { hasDuplicates } from '../../../../utility/utility';
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

        if ( !this.state.category || !this.state.value.trim() ) return;
        let newValue = this.state.value.trim().split(/,\s*/);
        // checking for this.props.items[this.state.category] because Firebase doesn't return keys of empty arrays
        if ( this.props.items[this.state.category] && hasDuplicates(this.props.items[this.state.category], newValue) ) return;
            
        const newList = this.props.items[this.state.category] ?
            this.props.items[this.state.category].concat(newValue) :
            newValue;
        let newSkillsList = {
            ...this.props.items,
            [this.state.category]: newList
        };
        this.setState({ value: '' });
        this.props.changed(newSkillsList, 'skills');
    }

    render() {
        let listItems = Object.keys(this.props.items).map(category => (
            this.props.items[category] ?
                <NestedListItem
                    key={category}
                    category={category + ':'}
                    items={this.props.items[category]} /> :
                null
        ));

        return (
            <div className={itemStyles.formItem}>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className={styles.addSkill}>
                    <input
                        id={this.props.id}
                        type="text"
                        placeholder={this.props.placeholder}
                        value={this.state.value}
                        onChange={this.handleInputChange} />
                    <select value={this.state.category} onChange={this.handleSelectChange}>
                        <option value="">--category--</option>
                        <option value="dancing">dancing</option>
                        <option value="musical">musical</option>
                        <option value="acting">acting</option>
                    </select>
                    <button onClick={this.handleSkillSubmit}>Add skill</button>
                </div>
                <div className={styles.skills}>
                    {listItems}
                </div>
            </div>
        );
    }
}

export default FormItemNestedList;