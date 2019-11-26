import React from 'react';
import styles from './ProfileNavigation.module.css';

const ProfileNavigation = (props) => {
    return (
        <div className={ styles.navigation }>
            <button
                onClick={ props.change }
                value="about"
                className={ props.active === 'about' ? styles.active : null }
            >About me</button>
            <button
                onClick={ props.change }
                value="projects"
                className={ props.active === 'projects' ? styles.active : null }
            >Projects</button>
        </div>
    );
};

export default ProfileNavigation;