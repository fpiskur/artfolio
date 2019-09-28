import React from 'react';
import styles from './AddNewEmployee.module.css';
import userPlaceholderImage from '../../images/fa-user.png';
import headerPlaceholderImage from '../../images/header-image.png';

import TopBar from '../../components/UI/TopBar/TopBar';

function AddNewEmployee () {
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
                    <div className={ styles.colLeft }></div>
                    <div className={ styles.colRight }></div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default AddNewEmployee;