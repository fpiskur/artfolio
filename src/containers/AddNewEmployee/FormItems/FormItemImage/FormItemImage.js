import React, { Component } from 'react';
import itemStyles from '../../../../components/AddNewEmployee/FormItems/formItems.module.css';
import styles from './FormItemImage.module.css';

import userPlaceholderImage from '../../../../images/fa-user.png';
import headerPlaceholderImage from '../../../../images/header-image.png';

class FormItemImage extends Component {

    state = {
        imgURL: ''
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        if (nextProps.value && !prevState.imgURL) {
            return { imgURL: nextProps.value };
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

    render () {
        let imageSrc;
        let imageStyle;

        switch (this.props.type) {
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
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <img className={ imageStyle } src={ imageSrc } alt={ this.props.label } />
                <div className={ styles.addImageInput }>
                    <input
                        id={ this.props.id }
                        type="url"
                        placeholder="Image URL"
                        value={ this.state.imgURL }
                        onChange={ this.handleInputChange } />
                    <button>Add image</button>
                </div>
            </div>
        );
    }
}

export default FormItemImage;