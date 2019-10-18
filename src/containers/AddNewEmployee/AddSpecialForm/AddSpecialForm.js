import React, { Component } from 'react';

import FormItemText from '../../../components/AddNewEmployee/FormItems/FormItemText/FormItemText';
import FormItemTextarea from '../../../components/AddNewEmployee/FormItems/FormItemTextarea/FormItemTextarea';

class AddSpecialForm extends Component {

    state = {
        name: '',
        date: '',
        place: '',
        city: '',
        short: '',
        description: '',
        images: [],
        videos: [],
        audio: []
    };

    inputChangeHandler = (value, id) => {
        this.setState({ [id]: value });
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
                    {/* FormItemDate */}
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
                    {/* <FormItemPhotoGallery /> */}
                    {/* <FormItemVideoGallery /> */}
                    {/* <FormItemAudioGallery /> */}
                    <button>Add New Special</button>
                </form>
            </React.Fragment>
        );
    }
}

export default AddSpecialForm;