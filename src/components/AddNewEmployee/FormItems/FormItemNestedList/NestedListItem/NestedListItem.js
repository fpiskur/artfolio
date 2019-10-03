import React from 'react';
import styles from './NestedListItem.module.css';

function NestedListItem (props) {

    let itemsList = null;
    if(props.items) {
        itemsList = props.items.map(item => (
            <div key={ item } className={ styles.listItem }>
                <span>{ item }</span>
                <button className={ styles.delBtn }>
                    <i className="far fa-times-circle"></i>
                </button>
            </div>
        ));
    }

    return (
        <div>
            <div className={ styles.skillsHeading }><small>{ props.category }</small></div>
            <div className={ styles.skillsList }>
                { itemsList }
            </div>
        </div>
    );
}

export default NestedListItem;