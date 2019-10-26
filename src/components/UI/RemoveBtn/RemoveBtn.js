import React from 'react';
import styles from './RemoveBtn.module.css';

function RemoveBtn (props) {
    return (
        <button className={ styles.RemoveBtn } onClick={ (event) => props.remove(event, props.image) }>
            <i className="fas fa-times"></i>
        </button>
    );
}

export default RemoveBtn;