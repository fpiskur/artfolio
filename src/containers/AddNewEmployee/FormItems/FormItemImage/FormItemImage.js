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

    handleInputSubmit = (event) => {
        event.preventDefault();
        this.props.changed(this.state.imgURL, this.props.id);
    }

    render () {
        let imageSrc;
        let imageStyle;

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

        return (
            <div className={ itemStyles.formItem }>
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <div className={ imageStyle }>
                    <img src={ imageSrc } alt={ this.props.label } />
                </div>
                <div className={ styles.addImageInput }>
                    <input
                        id={ this.props.id }
                        type="url"
                        placeholder="Image URL"
                        value={ this.state.imgURL }
                        onChange={ this.handleInputChange } />
                    <button onClick={ this.handleInputSubmit }>Add image</button>
                </div>
            </div>
        );
    }
}

export default FormItemImage;