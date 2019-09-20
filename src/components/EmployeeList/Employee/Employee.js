import React from 'react';
import styles from './Employee.module.css';
import userPlaceholder from '../../../images/blank-profile.png'

function Employee() {
    return (
        <div className={ styles.Employee }>
            <div className={ styles.employeePortrait }>
                <img src={ userPlaceholder } alt="Bill Burr portrait" />
            </div>
            <div className={ styles.employeeInfo }>
                <div className={ styles.header }>
                    <div>
                        <h3 className="employee-name">Bill Burr</h3>
                        <span className={ styles.profession }>Stand-up comedian, actor</span>
                    </div>
                    <div className={ styles.availability }>Not available</div>
                </div>
                <div className="employee-details">
                    <p className="about-short">
                        Non leo adipiscing nascetur vestibulum elit aliquam fermentum justo lacus condimentum aliquam torquent fermentum nullam tellus fringilla enim ullamcorper vestibulum a.
                    </p>
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