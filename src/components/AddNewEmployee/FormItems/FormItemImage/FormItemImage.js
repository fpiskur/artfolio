import React, { Component } from 'react';
import itemStyles from '../../../../components/AddNewEmployee/FormItems/formItems.module.css';
import styles from './FormItemImage.module.css';

import userPlaceholderImage from '../../../../images/fa-user.png';
import headerPlaceholderImage from '../../../../images/header-image.png';
import RemoveBtn from '../../../UI/RemoveBtn/RemoveBtn';

class FormItemImage extends Component {

    imgURL = React.createRef();

    handleInputSubmit = (event) => {
        event.preventDefault();
        this.props.changed(this.imgURL.current.value, this.props.id);
        this.imgURL.current.value = '';
    }

    handleRemoveImage = (event) => {
        event.preventDefault();
        this.props.changed('', this.props.id);
    }

    render () {
        let imageSrc;
        let imageStyle;
        let removeBtn = null;

        switch (this.props.type) {
            case 'profile':
                imageSrc = this.props.value || userPlaceholderImage;
                imageStyle = styles.profileImage;
                break;
            case 'header':
                imageSrc = this.props.value || headerPlaceholderImage;
                imageStyle = styles.headerImage;
                break;
            default:
                imageSrc = this.props.value || headerPlaceholderImage;
                imageStyle = styles.headerImage;
        }

        if (imageSrc === this.props.value) removeBtn = <RemoveBtn remove={ this.handleRemoveImage } />;

        return (
            <div className={ itemStyles.formItem }>
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <div className={ imageStyle }>
                    <img src={ imageSrc } alt={ this.props.label } />
                    { removeBtn }
                </div>
                <div className={ styles.addImageInput }>
                    <input
                        id={ this.props.id }
                        type="url"
                        placeholder={ this.props.value ? this.props.value : 'Image URL' }
                        ref={ this.imgURL } />
                    <button onClick={ this.handleInputSubmit }>Add image</button>
                </div>
            </div>
        );
    }
}

export default FormItemImage;