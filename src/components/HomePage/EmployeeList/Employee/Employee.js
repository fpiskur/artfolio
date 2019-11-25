import React from 'react';
import styles from './Employee.module.css';

function Employee (props) {
    
    let availabilityClass = props.availability === 'Available' ?
        styles.available :
        styles.notAvailable;

    return (
        <div className={ styles.Employee } onClick={ () => props.clicked(props.username) }>
            <div className={ styles.employeePortrait }>
                <img src={ props.profileImage } alt={ props.name + ' portrait' } />
            </div>
            <div className={ styles.employeeInfo }>
                <div className={ styles.header }>
                    <div>
                        <h3>{ props.name }</h3>
                        <span className={ styles.profession }>{ props.profession }</span>
                    </div>
                    <div className={ availabilityClass }>{ props.availability }</div>
                </div>
                <div>
                    <p>{ props.aboutShort }</p>
                </div>
            </div>
        </div>
    );
}

export default Employee;