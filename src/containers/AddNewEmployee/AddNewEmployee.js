import React, { Component } from 'react';
import styles from './AddNewEmployee.module.css';
import userPlaceholderImage from '../../images/fa-user.png';
import headerPlaceholderImage from '../../images/header-image.png';

import TopBar from '../../components/UI/TopBar/TopBar';

class AddNewEmployee extends Component {

    state = {
        charCount: 167
    }

    render () {
        return (
            <React.Fragment>
                <TopBar addNew={ false } />
                <div className={ styles.AddNewEmployeeBody }>
                    <h2>Add New Employee</h2>
                    <form>
                        <div className={ styles.colLeft }>
                            <div className={ styles.formItem }>
                                <label htmlFor="employee-username">Userame</label>
                                <input id="employee-username" type="text" placeholder="Employee username" />
                            </div>
                            <div className={ styles.formItem }>
                                <label htmlFor="employee-name">Name</label>
                                <input id="employee-name" type="text" placeholder="Employee name" />
                            </div>
                            <div className={ styles.formItem }>
                                <label htmlFor="employee-profession">Profession</label>
                                <input id="employee-profession" type="text" placeholder="Employee profession" />
                            </div>
                        </div>
                        <div className={ styles.colRight }>
                            <div className={ styles.formItem }>
                                <label htmlFor="profile-image">Profile image</label>
                                <img className={ styles.profileImage } src={ userPlaceholderImage } alt="Profile image" />
                                <div className={ styles.addImageInput }>
                                    <input id="profile-image" type="url" placeholder="Image URL" />
                                    <button>Add image</button>
                                </div>
                            </div>
                            <div className={ styles.formItem }>
                                <label htmlFor="header-image">Header image</label>
                                <img className={ styles.headerImage } src={ headerPlaceholderImage } alt="Header image" />
                                <div className={ styles.addImageInput }>
                                    <input id="header-image" type="url" placeholder="Image URL" />
                                    <button>Add image</button>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.colLeft }>
                            <div className={ styles.formItem }>
                                <label htmlFor="short-description">Short description</label>
                                <textarea id="short-description" rows="6" maxLength="167" placeholder="Description (max 167 characters)"></textarea>
                                <span className={ styles.rightFloat }>characters left: <strong>{ this.state.charCount }</strong></span>
                            </div>
                            <div className={ styles.formItem }>
                                <label htmlFor="personal-website">Personal website</label>
                                <input id="personal-website" type="text" placeholder="Website URL" />
                            </div>
                            <div className={ `${styles.formItem} ${styles.directionRow}` }>
                                <label htmlFor="availability">Availability:</label>
                                <select id="availability">
                                    <option value="Available">Available</option>
                                    <option value="Not available">Not available</option>
                                </select>
                            </div>
                            <div className={ styles.formItem }>
                                <label htmlFor="skills">Skills</label>
                                <div className={ styles.addSkill }>
                                    <input id="skills" type="text" placeholder="New skill" />
                                    <select>
                                        <option value="">--category--</option>
                                        <option value="musical">musical</option>
                                        <option value="acting">acting</option>
                                        <option value="dancing">dancing</option>
                                    </select>
                                    <button>Add skill</button>
                                </div>
                                <div className={ styles.skills }>
                                    <div>
                                        <div className={ styles.skillsHeading }><small>MUSICAL:</small></div>
                                        <div className={ styles.skillsList }>
                                            <span>guitar</span>
                                            <span>drums</span>
                                            <span>triangle</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={ styles.skillsHeading }><small>ACTING:</small></div>
                                        <div className={ styles.skillsList }>
                                            <span>comedy</span>
                                            <span>drama</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={ styles.skillsHeading }><small>DANCING:</small></div>
                                        <div className={ styles.skillsList }>
                                            <span>contemporary</span>
                                            <span>waltz</span>
                                            <span>tap dance</span>
                                            <span>salsa</span>
                                            <span>silly dancing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.colRight }></div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AddNewEmployee;