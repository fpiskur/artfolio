import React from 'react';
import styles from './EmployeeList.module.css';

import Employee from './Employee/Employee';

function EmployeeList (props) {

    return (
        <div className={ styles.EmployeeList }>
            {
                props.comedians.map(comedian => (
                    <Employee
                        clicked={ props.clicked }
                        key={ comedian.username }
                        username={ comedian.username }
                        name={ comedian.name }
                        profileImage={ comedian.profileImage }
                        profession={ comedian.profession }
                        availability={ comedian.availability }
                        aboutShort={ comedian.aboutShort }
                    />
                ))
            }
        </div>
    );
}

export default EmployeeList;