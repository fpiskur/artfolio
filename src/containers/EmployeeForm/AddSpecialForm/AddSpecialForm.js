import React, { Component } from 'react';

import FormItemText from '../../../components/EmployeeForm/FormItems/FormItemText/FormItemText';
import FormItemTextarea from '../../../components/EmployeeForm/FormItems/FormItemTextarea/FormItemTextarea';
import FormItemImage from '../../../components/EmployeeForm/FormItems/FormItemImage/FormItemImage';
import FormItemDate from '../../../components/EmployeeForm/FormItems/FormItemDate/FormItemDate';
import FormItemPhotoGallery from '../../../components/EmployeeForm/FormItems/FormItemPhotoGallery/FormItemPhotoGallery';
import FormItemVideoGallery from '../../../components/EmployeeForm/FormItems/FormItemVideoGallery/FormItemVideoGallery';
import FormItemAudioGallery from '../../../components/EmployeeForm/FormItems/FormItemAudioGallery/FormItemAudioGallery';

class AddSpecialForm extends Component {

    state = {
        name: '',
        date: '',
        place: '',
        city: '',
        short: '',
        description: '',
        headerImage: '',
        images: [],
        videos: [],
        audio: []
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
                <h3>Add New Special</h3>
                <form>
                    <FormItemText
                        id="name"
                        label="Name"
                        placeholder="Name of the Special"
                        value={ this.state.name }
                        changed={ this.inputChangeHandler } />
                    <FormItemDate
                        id="date"
                        label="Date"
                        value={ this.state.date }
                        changed={ this.inputChangeHandler } />
                    <FormItemText
                        id="place"
                        label="Place / club"
                        placeholder="Place / club"
                        value={ this.state.place }
                        changed={ this.inputChangeHandler } />
                    <FormItemText
                        id="city"
                        label="City"
                        placeholder="City"
                        value={ this.state.city }
                        changed={ this.inputChangeHandler } />
                    <FormItemTextarea
                        type="short"
                        id="short"
                        label="Short description"
                        placeholder="Short description (max 167 characters)"
                        value={ this.state.short }
                        changed={ this.inputChangeHandler } />
                    <FormItemTextarea
                        type="about"
                        id="description"
                        label="Full description"
                        placeholder="Full description"
                        value={ this.state.description }
                        changed={ this.inputChangeHandler } />
                    <FormItemImage
                        type="header"
                        id="headerImage"
                        label="Header image"
                        value={ this.state.headerImage }
                        changed={ this.inputChangeHandler } />
                    <FormItemPhotoGallery
                        id="images"
                        label="Photo Gallery"
                        value={ this.state.images }
                        changed={ this.inputChangeHandler } />
                    <FormItemVideoGallery
                        id="videos"
                        label="Video Gallery"
                        value={ this.state.videos }
                        changed={ this.inputChangeHandler } />
                    <FormItemAudioGallery
                        id="audio"
                        label="Audio Gallery"
                        value={ this.state.audio }
                        changed={ this.inputChangeHandler } />
                    
                    <button onClick={ this.formSubmitHandler }>Add Special</button>
                </form>
            </React.Fragment>
        );
    }
}

export default AddSpecialForm;