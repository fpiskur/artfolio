import React, { Component } from 'react';
import styles from './AddNewEmployee.module.css';
import axios from '../../axios';

import TopBar from '../../components/UI/TopBar/TopBar';
import FormItemText from '../../components/AddNewEmployee/FormItems/FormItemText/FormItemText';
import FormItemImage from '../../components/AddNewEmployee/FormItems/FormItemImage/FormItemImage';
import FormItemTextarea from './FormItems/FormItemTextarea/FormItemTextarea';
import FormItemSelect from '../../components/AddNewEmployee/FormItems/FormItemSelect/FormItemSelect';
import FormItemNestedList from '../../components/AddNewEmployee/FormItems/FormItemNestedList/FormItemNestedList';
import FormItemList from '../../components/AddNewEmployee/FormItems/FormItemList/FormItemList';

class AddNewEmployee extends Component {

    state = {
        form: {
            username: '',
            name: '',
            profession: '',
            website: '',
            profilePhoto: '',
            headerImage: '',
            aboutShort: '',
            availability: '',
            skills: [],
            specials: [],
            tvShows: [],
            education: [],
            workshops: [],
            aboutLong: ''
        },
        ui: {
            charCount: 167
        }
    }

    componentDidMount () {
        axios.get('/comedians/0.json')
            .then(response => {
                this.setState({ form: response.data })
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    render () {
        return (
            <React.Fragment>
                <TopBar />
                <div className={ styles.AddNewEmployeeBody }>
                    <h2>Add New Employee</h2>
                    <form>
                        <div className={ styles.colLeft }>
                            <FormItemText
                                id="employee-username"
                                label="Username"
                                placeholder="Employee username" />
                            <FormItemText
                                id="employee-name"
                                label="Name"
                                placeholder="Employee name" />
                            <FormItemText
                                id="employee-profession"
                                label="Profession"
                                placeholder="Employee profession" />
                            <FormItemText
                                id="personal-website"
                                label="Personal website"
                                placeholder="Website URL" />
                        </div>
                        <div className={ styles.colRight }>
                            <FormItemImage
                                type="profile"
                                id="profile-image"
                                label="Profile image" />
                            <FormItemImage
                                type="header"
                                id="header-image"
                                label="Header image" />
                        </div>
                        <div className={ styles.colLeft }>
                            <FormItemTextarea
                                type="short"
                                id="short-description"
                                label="Short description"
                                placeholder="Description (max 167 characters)" />
                            <FormItemSelect
                                id="availability"
                                label="Availability:"
                                options={[ 'Available', 'Not available' ]} />
                            <FormItemNestedList
                                id="skills"
                                label="Skills"
                                placeholder="New skill"
                                items={ this.state.form.skills } />
                            <FormItemList
                                label="Specials"
                                items={ this.state.form.specials } />
                            <FormItemList
                                label="TV Shows"
                                items={ this.state.form.tvShows } />
                            <FormItemList
                                label="Education"
                                items={ this.state.form.education } />
                            <FormItemList
                                label="Workshops"
                                items={ this.state.form.workshops } />
                        </div>
                        <div className={ styles.colRight }>
                            <FormItemTextarea
                                id="about"
                                label="About"
                                placeholder="About"
                                type="about" />
                        </div>
                        <button className={ styles.addEmployeeBtn }>Add Employee</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AddNewEmployee;