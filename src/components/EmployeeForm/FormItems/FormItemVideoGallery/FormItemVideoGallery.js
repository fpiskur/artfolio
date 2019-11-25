import React, { Component } from 'react';
import itemStyles from '../../../../components/EmployeeForm/FormItems/formItems.module.css';
import styles from './FormItemVideoGallery.module.css';

import RemoveBtn from '../../../UI/RemoveBtn/RemoveBtn';

import { hasDuplicates, getUrlParams } from '../../../../utility/utility';

class FormItemVideoGallery extends Component {

    videoURL = React.createRef();

    handleInputSubmit = (event) => {
        event.preventDefault();
        if (this.videoURL.current.value.trim() === '') return;

        const newList = this.props.value.concat(this.videoURL.current.value);
        if (hasDuplicates(newList)) return;
        
        this.props.changed(newList, this.props.id);
        this.videoURL.current.value = '';
    }

    handleRemoveVideo = (video) => {
        const newList = this.props.value.filter(item => item !== video);
        this.props.changed(newList, this.props.id);
    }

    render () {

        let galleryItems = null;
        if (this.props.value[0]) {
            // Prevent duplicates
            const uniqueItems = new Set(this.props.value);
            galleryItems = [...uniqueItems].map(video => (
                <div key={ video } className={ styles.galleryItem }>
                    <iframe
                        title="Youtube Video"
                        width="560"
                        height="315"
                        src={ 'https://www.youtube.com/embed/' + getUrlParams(video).v }
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                    <RemoveBtn overlap remove={ () => this.handleRemoveVideo(video) } />
                </div>
            ));
        }

        return (
            <div className={ itemStyles.formItem }>
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <div className={ styles.addVideoInput }>
                    <input
                        id={ this.props.id }
                        type="url"
                        placeholder="Youtube Video URL"
                        ref={ this.videoURL } />
                    <button onClick={ this.handleInputSubmit }>Add video</button>
                </div>
                <div className={ styles.videoGallery }>
                    { galleryItems }
                </div>
            </div>
        );
    }
}

export default FormItemVideoGallery;