import React from 'react';
import styles from './Employee.module.css';

function Employee (props) {
    
    let availabilityClass = props.availability === 'Available' ?
        styles.available :
        styles.notAvailable;


    return (
        <div className={ styles.Employee }>
            <div className={ styles.employeePortrait }>
                <img src={ props.profilePhoto } alt={ props.name + ' portrait' } />
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
                    {/* <div className="skills">
                        <span>SKILLS:</span>&nbsp;
                        <span>contemporary, beatboxing, triangle, drama, comedy, action</span>
                    </div>
                    <div className="specials">
                        <span>SPECIALS:</span>&nbsp;
                        <span>Why Do I Do This?, Let It Go, You People Are All the Same, I'm Sorry You Feel That Way, Walk Your Way Out</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Employee;