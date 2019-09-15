import React from 'react';

function Employee() {
    return (
        <div>
            <div className="employee-portrait">
                <img alt="Bill Burr portrait" />
            </div>
            <div className="employee-info">
                <div className="header">
                    <h3 className="employee-name">Bill Burr</h3>
                    <div className="profession">Stand-up comedian, actor</div>
                    <div className="availability">Not available</div>
                </div>
                <div className="employee-details">
                    <p className="about-short">
                        Non leo adipiscing nascetur vestibulum elit aliquam fermentum justo lacus condimentum aliquam torquent fermentum nullam tellus fringilla enim ullamcorper vestibulum a.
                    </p>
                    <div className="skills">
                        <span>SKILLS:</span>&nbsp;
                        <span>contemporary, beatboxing, triangle, drama, comedy, action</span>
                    </div>
                    <div className="specials">
                        <span>SPECIALS:</span>&nbsp;
                        <span>Why Do I Do This?, Let It Go, You People Are All the Same, I'm Sorry You Feel That Way, Walk Your Way Out</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employee;