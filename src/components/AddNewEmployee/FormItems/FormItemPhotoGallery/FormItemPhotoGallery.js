import React, { Component } from 'react';
import itemStyles from '../../../../components/AddNewEmployee/FormItems/formItems.module.css';
import styles from './FormItemPhotoGallery.module.css';

import { hasDuplicates } from '../../../../utility/utility';

class FormItemPhotoGallery extends Component {

    imgURL = React.createRef();

    handleInputSubmit = (event) => {
        event.preventDefault();
        const newList = this.props.value.concat(this.imgURL.current.value);
        if (hasDuplicates(newList)) return;
        this.imgURL.current.value = '';
        this.props.changed(newList, this.props.id);
    }

    render () {

        let galleryItems = null;
        if (this.props.value[0]) {
            // Prevent duplicates
            const uniqueItems = new Set(this.props.value);
            galleryItems = [...uniqueItems].map(image => (
                <div key={ image } className={ styles.galleryItem }>
                    <img src={ image } alt="gallery item" />
                </div>
            ));
        }

        return (
            <div className={ itemStyles.formItem }>
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <div className={ styles.addImageInput }>
                    <input
                        id={ this.props.id }
                        type="url"
                        placeholder="Image URL"
                        ref={ this.imgURL } />
                    <button onClick={ this.handleInputSubmit }>Add image</button>
                </div>
                <div className={ styles.photoGallery }>
                    { galleryItems }                    
                </div>
            </div>
        );
    }
}

export default FormItemPhotoGallery;