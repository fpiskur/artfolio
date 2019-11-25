import React, { Component } from 'react';
import itemStyles from '../../../../components/EmployeeForm/FormItems/formItems.module.css';
import styles from './FormItemAudioGallery.module.css';

import RemoveBtn from '../../../UI/RemoveBtn/RemoveBtn';

import { hasDuplicates } from '../../../../utility/utility';

class FormItemAudioGallery extends Component {

    audioURL = React.createRef();

    handleInputSubmit = (event) => {
        event.preventDefault();
        if (this.audioURL.current.value.trim() === '') return;

        const newList = this.props.value.concat(this.audioURL.current.value);
        if (hasDuplicates(newList)) return;
        
        this.props.changed(newList, this.props.id);
        this.audioURL.current.value = '';
    }

    handleRemoveAudio = (audio) => {
        const newList = this.props.value.filter(item => item !== audio);
        this.props.changed(newList, this.props.id);
    }

    render () {

        let galleryItems = null;
        if (this.props.value[0]) {
            // Prevent duplicates
            const uniqueItems = new Set(this.props.value);
            galleryItems = [...uniqueItems].map(audio => (
                <div key={ audio } className={ styles.galleryItem }>
                    <audio controls controlsList="nodownload" src={ audio }>
                    Your browser does not support the <code>audio</code> element.
                    </audio>
                    <RemoveBtn remove={ () => this.handleRemoveAudio(audio) } />
                </div>
            ));
        }

        return (
            <div className={ itemStyles.formItem }>
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <div className={ styles.addAudioInput }>
                    <input
                        id={ this.props.id }
                        type="url"
                        placeholder="Audio URL"
                        ref={ this.audioURL } />
                    <button onClick={ this.handleInputSubmit }>Add audio</button>
                </div>
                <div className={ styles.audioGallery }>
                    { galleryItems }
                </div>
            </div>
        );
    }
}

export default FormItemAudioGallery;