import React from 'react';
import styles from './Modal.module.css';

import Backdrop from '../Backdrop/Backdrop';

function Modal (props) {

    const handleButtonClick = (event) => {
        event.preventDefault();
        props.hideModal();
    };

    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.hideModal} />
            <div className={ `${ styles.Modal } ${ props.show ? styles.shown : null }` }>
                <div className={ styles.header }>
                    <button onClick={ handleButtonClick }><i className="fas fa-times"></i></button>
                </div>
                { props.children }
            </div>
        </React.Fragment>
    );
}

export default Modal;