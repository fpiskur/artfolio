import React from 'react';
import styles from './ListItem.module.css';

function ListItem (props) {
    return (
        <li className={ styles.projectItem }>
            <div className={ styles.event }>
                <h3>{ props.title }</h3>
                { props.subtitle ? <p>{ props.subtitle }</p> : null }
            </div>
            <div className={ styles.date }>
                { props.date }
            </div>
            <button className={ styles.editBtn }>
                <i className="far fa-edit"></i>
            </button>
        </li>
    );
}

export default ListItem;