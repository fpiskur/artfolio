import React, { Component } from 'react';
import styles from './AddNewEmployee.module.css';
import axios from '../../axios';

import TopBar from '../../components/UI/TopBar/TopBar';
import FormItemText from '../../components/AddNewEmployee/FormItems/FormItemText/FormItemText';
import FormItemImage from './FormItems/FormItemImage/FormItemImage';
import FormItemTextarea from '../../components/AddNewEmployee/FormItems/FormItemTextarea/FormItemTextarea';
import FormItemSelect from '../../components/AddNewEmployee/FormItems/FormItemSelect/FormItemSelect';
import FormItemNestedList from '../../components/AddNewEmployee/FormItems/FormItemNestedList/FormItemNestedList';
import FormItemList from '../../components/AddNewEmployee/FormItems/FormItemList/FormItemList';

class AddNewEmployee extends Component {

    state = {
        username: '',
        name: '',
        profession: '',
        website: '',
        profilePhoto: '',
        headerImage: '',
        aboutShort: '',
        availability: 'Available',
        skills: [],
        specials: [],
        tvShows: [],
        education: [],
        workshops: [],
        aboutLong: ''
    }

    componentDidMount () {
        axios.get('/comedians/0.json')
            .then(response => {
                this.setState({ ...response.data })
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    inputChangeHandler = (value, id) => {
        this.setState({ [id]: value });
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
                                id="username"
                                label="Username"
                                placeholder="Employee username"
                                value={ this.state.username }
                                changed={ this.inputChangeHandler } />
                            <FormItemText
                                id="name"
                                label="Name"
                                placeholder="Employee name"
                                value={ this.state.name }
                                changed={ this.inputChangeHandler } />
                            <FormItemText
                                id="profession"
                                label="Profession"
                                placeholder="Employee profession"
                                value={ this.state.profession }
                                changed={ this.inputChangeHandler } />
                            <FormItemText
                                id="website"
                                label="Personal website"
                                placeholder="Website URL"
                                value={ this.state.website }
                                changed={ this.inputChangeHandler } />
                        </div>
                        <div className={ styles.colRight }>
                            <FormItemImage
                                type="profile"
                                id="profilePhoto"
                                label="Profile image"
                                value={ this.state.profilePhoto }
                                changed={ this.inputChangeHandler } />
                            <FormItemImage
                                type="header"
                                id="headerImage"
                                label="Header image"
                                value={ this.state.headerImage }
                                changed={ this.inputChangeHandler } />
                        </div>
                        <div className={ styles.colLeft }>
                            <FormItemTextarea
                                type="short"
                                id="aboutShort"
                                label="Short description"
                                placeholder="Description (max 167 characters)"
                                value={ this.state.aboutShort }
                                changed={ this.inputChangeHandler } />
                            <FormItemSelect
                                id="availability"
                                label="Availability:"
                                options={[ 'Available', 'Not available' ]}
                                value={ this.state.availability }
                                changed={ this.inputChangeHandler } />
                            <FormItemNestedList
                                id="skills"
                                label="Skills"
                                placeholder="New skill"
                                items={ this.state.skills } />
                            <FormItemList
                                id="specials"
                                label="Specials"
                                items={ this.state.specials } />
                            <FormItemList
                                id="tvShows"
                                label="TV Shows"
                                items={ this.state.tvShows } />
                            <FormItemList
                                id="education"
                                label="Education"
                                items={ this.state.education } />
                            <FormItemList
                                id="workshops"
                                label="Workshops"
                                items={ this.state.workshops } />
                        </div>
                        <div className={ styles.colRight }>
                            <FormItemTextarea
                                id="aboutLong"
                                label="About"
                                placeholder="About"
                                type="about"
                                value={ this.state.aboutLong }
                                changed={ this.inputChangeHandler } />
                        </div>
                        <button className={ styles.addEmployeeBtn }>Add Employee</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AddNewEmployee;