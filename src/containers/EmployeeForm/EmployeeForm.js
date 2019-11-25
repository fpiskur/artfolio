import React, { Component } from 'react';
import styles from './EmployeeForm.module.css';
import { artfoliodb } from '../../firebase';

import TopBar from '../../components/UI/TopBar/TopBar';
import FormItemText from '../../components/EmployeeForm/FormItems/FormItemText/FormItemText';
import FormItemImage from '../../components/EmployeeForm/FormItems/FormItemImage/FormItemImage';
import FormItemTextarea from '../../components/EmployeeForm/FormItems/FormItemTextarea/FormItemTextarea';
import FormItemSelect from '../../components/EmployeeForm/FormItems/FormItemSelect/FormItemSelect';
import FormItemNestedList from './FormItems/FormItemNestedList/FormItemNestedList';
import FormItemList from '../../components/EmployeeForm/FormItems/FormItemList/FormItemList';
import Modal from '../../components/UI/Modal/Modal';
import AddSpecialForm from './AddSpecialForm/AddSpecialForm';
import AddTvShowForm from './AddTvShowForm/AddTvShowForm';
import AddEducationForm from './AddEducationForm/AddEducationForm';
import AddWorkshopForm from './AddWorkshopForm/AddWorkshopForm';

class EmployeeForm extends Component {

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
        visibleModal: null
    }

    componentDidMount () {
        if (this.props.match.params.username) {
            let username = this.props.match.params.username;
            artfoliodb.collection('comedians-data').doc(username).get()
                .then(snapshot => {
                    if (snapshot && snapshot.exists) {
                        this.setState({ form: snapshot.data() });
                    }
                });
        }
    }

    inputChangeHandler = (value, id) => {
        this.setState(state => ({
            form: {
                ...state.form,
                [id]: value
            }
        }));
    }

    submitModalFormHandler = (value, id) => {
        this.setState(state => ({
            form: {
                ...state.form,
                [id]: [
                    ...this.state.form[id],
                    value
                ]
            }
        }));
        this.hideModalHandler();
    }

    hideModalHandler = () => {
        this.setState({ visibleModal: null });
    }

    showModalHandler = (label) => {
        this.setState({ visibleModal: label });
    }

    render () {

        let modalForm = null;
        if (this.state.visibleModal) {
            switch (this.state.visibleModal) {
                case 'Specials':
                    modalForm = <AddSpecialForm id="specials" submitForm={ this.submitModalFormHandler } />;
                    break;
                case 'TV Shows':
                    modalForm = <AddTvShowForm id="tvShows" submitForm={ this.submitModalFormHandler } />;
                    break;
                case 'Education':
                    modalForm = <AddEducationForm id="education" submitForm={ this.submitModalFormHandler } />;
                    break;
                case 'Workshops':
                    modalForm = <AddWorkshopForm id="workshops" submitForm={ this.submitModalFormHandler } />;
                    break;
                default:
                    modalForm = null;
            }
        }

        return (
            <React.Fragment>
                <TopBar />
                <div className={ styles.EmployeeFormBody }>
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
                                value={ this.state.form.profileImage }
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
                                label="Specials"
                                items={ this.state.form.specials }
                                showModal={ this.showModalHandler } />
                            <FormItemList
                                label="TV Shows"
                                items={ this.state.form.tvShows }
                                showModal={ this.showModalHandler } />
                            <FormItemList
                                label="Education"
                                items={ this.state.form.education }
                                showModal={ this.showModalHandler } />
                            <FormItemList
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
                        show={ this.state.visibleModal }
                        hideModal={ this.hideModalHandler }>
                            { modalForm }
                    </Modal>
                </div>
            </React.Fragment>
        );
    }
}

export default EmployeeForm;