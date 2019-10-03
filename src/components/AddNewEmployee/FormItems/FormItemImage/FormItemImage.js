import React from 'react';
import itemStyles from '../formItems.module.css';
import styles from './FormItemImage.module.css';

import userPlaceholderImage from '../../../../images/fa-user.png';
import headerPlaceholderImage from '../../../../images/header-image.png';

function FormItemImage (props) {

    let imageSrc;
    let imageStyle;
    switch (props.type) {
        case 'profile':
            imageSrc = userPlaceholderImage;
            imageStyle = styles.profileImage;
            break;
        case 'header':
            imageSrc = headerPlaceholderImage;
            imageStyle = styles.headerImage;
            break;
        default:
            imageSrc = headerPlaceholderImage;
            imageStyle = styles.headerImage;
    }

    return (
        <div className={ itemStyles.formItem }>
            <label htmlFor={ props.id }>{ props.label }</label>
            <img className={ imageStyle } src={ imageSrc } alt={ props.label } />
            <div className={ styles.addImageInput }>
                <input id={ props.id } type="url" placeholder="Image URL" />
                <button>Add image</button>
            </div>
        </div>
    );
}

export default FormItemImage;