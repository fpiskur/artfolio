import React from 'react';
import Employee from './Employee/Employee';
import styles from './EmployeeList.module.css';

function EmployeeList() {
    return (
        <div className={ styles.EmployeeList }>
            <Employee />
        </div>
    );
}

export default EmployeeList;