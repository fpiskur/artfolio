import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TopBar.module.css';

function TopBar (props) {
    return (
        <div className={ styles.topBar }>
            <NavLink to="/" exact className={ styles.homeBtn }>HOME</NavLink>
            { props.addNew ?
                <NavLink to="/add-new-employee" className={ styles.addNewBtn }>Add New Employee</NavLink> :
                null }
        </div>
    );
}

export default TopBar;