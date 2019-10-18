import React, { Component } from 'react';
import styles from './AddNewEmployee.module.css';
import axios from '../../axios';

import TopBar from '../../components/UI/TopBar/TopBar';
import FormItemText from '../../components/AddNewEmployee/FormItems/FormItemText/FormItemText';
import FormItemImage from './FormItems/FormItemImage/FormItemImage';
import FormItemTextarea from '../../components/AddNewEmployee/FormItems/FormItemTextarea/FormItemTextarea';
import FormItemSelect from '../../components/AddNewEmployee/FormItems/FormItemSelect/FormItemSelect';
import FormItemNestedList from './FormItems/FormItemNestedList/FormItemNestedList';
import FormItemList from '../../components/AddNewEmployee/FormItems/FormItemList/FormItemList';
import Modal from '../../components/UI/Modal/Modal';
import AddSpecialForm from './AddSpecialForm/AddSpecialForm';

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
            availability: 'Available',
            skills: [],
            specials: [],
            tvShows: [],
            education: [],
            workshops: [],
            aboutLong: ''
        },
        visibleModal: 'null'
    }

    componentDidMount () {
        axios.get('/comedians/0.json')
            .then(response => {
                this.setState({ form: {...response.data} })
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    inputChangeHandler = (value, id) => {
        this.setState(state => ({
            form: {
                ...state.form,
                [id]: value
            }
        }));
    }

    hideModalHandler = () => {
        this.setState({ visibleModal: null });
    }

    showModalHandler = (label) => {
        this.setState({ visibleModal: label });
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
                                value={ this.state.form.username }
                                changed={ this.inputChangeHandler } />
                            <FormItemText
                                id="name"
                                label="Name"
                                placeholder="Employee name"
                                value={ this.state.form.name }
                                changed={ this.inputChangeHandler } />
                            <FormItemText
                                id="profession"
                                label="Profession"
                                placeholder="Employee profession"
                                value={ this.state.form.profession }
                                changed={ this.inputChangeHandler } />
                            <FormItemText
                                id="website"
                                label="Personal website"
                                placeholder="Website URL"
                                value={ this.state.form.website }
                                changed={ this.inputChangeHandler } />
                        </div>
                        <div className={ styles.colRight }>
                            <FormItemImage
                                type="profile"
                                id="profilePhoto"
                                label="Profile image"
                                value={ this.state.form.profilePhoto }
                                changed={ this.inputChangeHandler } />
                            <FormItemImage
                                type="header"
                                id="headerImage"
                                label="Header image"
                                value={ this.state.form.headerImage }
                                changed={ this.inputChangeHandler } />
                        </div>
                        <div className={ styles.colLeft }>
                            <FormItemTextarea
                                type="short"
                                id="aboutShort"
                                label="Short description"
                                placeholder="Description (max 167 characters)"
                                value={ this.state.form.aboutShort }
                                changed={ this.inputChangeHandler } />
                            <FormItemSelect
                                id="availability"
                                label="Availability:"
                                options={[ 'Available', 'Not available' ]}
                                value={ this.state.form.availability }
                                changed={ this.inputChangeHandler } />
                            <FormItemNestedList
                                id="skills"
                                label="Skills"
                                placeholder="New skill"
                                items={ this.state.form.skills }
                                changed={ this.inputChangeHandler } />
                            <FormItemList
                                id="specials"
                                label="Specials"
                                items={ this.state.form.specials }
                                showModal={ this.showModalHandler } />
                            <FormItemList
                                id="tvShows"
                                label="TV Shows"
                                items={ this.state.form.tvShows }
                                showModal={ this.showModalHandler } />
                            <FormItemList
                                id="education"
                                label="Education"
                                items={ this.state.form.education }
                                showModal={ this.showModalHandler } />
                            <FormItemList
                                id="workshops"
                                label="Workshops"
                                items={ this.state.form.workshops }
                                showModal={ this.showModalHandler } />
                        </div>
                        <div className={ styles.colRight }>
                            <FormItemTextarea
                                type="about"
                                id="aboutLong"
                                label="About"
                                placeholder="About"
                                value={ this.state.form.aboutLong }
                                changed={ this.inputChangeHandler } />
                        </div>
                        
                        <button className={ styles.addEmployeeBtn }>Add Employee</button>
                    </form>
                    <Modal
                        show={ this.state.visibleModal === 'Specials' ? true : false }
                        hideModal={ this.hideModalHandler }>
                            <AddSpecialForm />
                    </Modal>
                </div>
            </React.Fragment>
        );
    }
}

export default AddNewEmployee;