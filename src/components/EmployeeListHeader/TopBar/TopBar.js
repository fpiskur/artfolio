import React from 'react';
import styles from './TopBar.module.css';

function TopBar () {
    return (
        <div className={ styles.topBar }>
            <button className={ styles.homeBtn }>HOME</button>
            <button className={ styles.addNewBtn }>Add New Employee</button>
        </div>
    );
}

export default TopBar;