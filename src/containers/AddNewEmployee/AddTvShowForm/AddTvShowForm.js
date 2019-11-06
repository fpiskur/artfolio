import React, { Component } from 'react';

import FormItemText from '../../../components/AddNewEmployee/FormItems/FormItemText/FormItemText';
import FormItemTextarea from '../../../components/AddNewEmployee/FormItems/FormItemTextarea/FormItemTextarea';
import FormItemImage from '../../../components/AddNewEmployee/FormItems/FormItemImage/FormItemImage';
import FormItemDate from '../../../components/AddNewEmployee/FormItems/FormItemDate/FormItemDate';
import FormItemVideoGallery from '../../../components/AddNewEmployee/FormItems/FormItemVideoGallery/FormItemVideoGallery';

class AddTvShowForm extends Component {

    state = {
        name: '',
        date: '',
        description: '',
        headerImage: '',
        videos: []
    };

    inputChangeHandler = (value, id) => {
        this.setState({ [id]: value });
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.submitForm(this.state, this.props.id);
    }

    render () {
        return (
            <React.Fragment>
                <h3>Add New TV Show</h3>
                <form>
                    <FormItemText
                        id="name"
                        label="Name"
                        placeholder="Name of the TV Show"
                        value={ this.state.name }
                        changed={ this.inputChangeHandler } />
                    <FormItemDate
                        id="date"
                        label="Date"
                        value={ this.state.date }
                        changed={ this.inputChangeHandler } />
                    <FormItemTextarea
                        type="short"
                        id="description"
                        label="Short description"
                        placeholder="Short description (max 167 characters)"
                        value={ this.state.description }
                        changed={ this.inputChangeHandler } />
                    <FormItemImage
                        type="header"
                        id="headerImage"
                        label="Header image"
                        value={ this.state.headerImage }
                        changed={ this.inputChangeHandler } />
                    <FormItemVideoGallery
                        id="videos"
                        label="Video Gallery"
                        value={ this.state.videos }
                        changed={ this.inputChangeHandler } />
                    
                    <button onClick={ this.formSubmitHandler }>Add TV Show</button>
                </form>
            </React.Fragment>
        );
    }
}

export default AddTvShowForm;