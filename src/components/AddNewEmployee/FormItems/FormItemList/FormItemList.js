import React from 'react';
import itemStyles from '../formItems.module.css';
import styles from './FormItemList.module.css';

import ListItem from './ListItem/ListItem';

function FormItemList (props) {
    return (
        <div className={ itemStyles.formItem }>
            <div className={ styles.labelInline }>
                <label>{ props.label }</label>
                <button className={ styles.addItemBtn }><i className="fas fa-plus"></i></button>
            </div>
            <ul className={ styles.projectsList }>
                {/* <li className={ styles.projectItem }>
                    <div className={ styles.event }>
                        <h3>The Thing!</h3>
                        <p>@ York</p>
                    </div>
                    <div className={ styles.date }>
                        25.11.2019.
                    </div>
                    <button className={ styles.editBtn }>
                        <i className="far fa-edit"></i>
                    </button>
                </li> */}
                <ListItem
                    title="The Thing!"
                    subtitle="@ York"
                    date="25.11.2019." />
            </ul>
        </div>
    );
}

export default FormItemList;