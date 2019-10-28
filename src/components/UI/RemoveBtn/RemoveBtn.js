import React from 'react';
import styles from './RemoveBtn.module.css';

function RemoveBtn (props) {

    const handleClick = (event) => {
        event.preventDefault();
        props.remove();
    }

    return (
        <button className={ styles.RemoveBtn } onClick={ handleClick }>
            <i className="fas fa-times"></i>
        </button>
    );
}

export default RemoveBtn;