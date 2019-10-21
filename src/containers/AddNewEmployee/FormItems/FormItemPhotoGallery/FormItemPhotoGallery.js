import React, { Component } from 'react';
import itemStyles from '../../../../components/AddNewEmployee/FormItems/formItems.module.css';
import styles from './FormItemPhotoGallery.module.css';

import { hasDuplicates } from '../../../../utility/utility';

class FormItemPhotoGallery extends Component {

    state = {
        imgURL: '',
        imgList: []
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        if (nextProps.value[0]) {
            return { imgList: nextProps.value };
        } else {
            return null;
        }
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.value !== this.props.value || nextState.imgURL !== this.state.imgURL;
    }

    handleInputChange = (event) => {
        const url = event.target.value;
        this.setState({ imgURL: url });
    }

    handleInputSubmit = (event) => {
        event.preventDefault();
        const newList = this.state.imgList.concat(this.state.imgURL);

        if (hasDuplicates(this.state.imgList, newList)) return;

        this.setState({ imgURL: '' });
        this.props.changed(newList, this.props.id);
    }

    render () {

        let galleryItems = null;
        if (this.state.imgList[0]) {
            // Prevent duplicates
            const uniqueItems = new Set(this.state.imgList);
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
                        value={ this.state.imgURL }
                        onChange={ this.handleInputChange } />
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