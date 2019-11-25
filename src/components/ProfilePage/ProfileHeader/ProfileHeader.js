import React from 'react';
import styles from './ProfileHeader.module.css';
import { prettyUrl } from '../../../utility/utility';

import headerImage from '../../../images/profile-header-image.png';
import profileImage from '../../../images/fa-user.png';

const ProfileHeader = (props) => {

    let availabilityClass = props.availability === 'Available' ?
        styles.available :
        styles.notAvailable;

    return (
        <header>
            <div className={ styles.images }>
                <div className={ styles.headerImage }>
                    <img src={ props.headerImage ? props.headerImage : headerImage } alt="Header" />
                </div>
                <div className={ styles.profileImage }>
                    <img src={ props.profileImage ? props.profileImage : profileImage } alt="Profile" />
                </div>
            </div>
            <div className={ styles.info }>
                <div className={ `${styles.availability} ${ availabilityClass }` }>
                    { props.availability }
                </div>
                <div className={ styles.bio }>
                    <h2>{ props.name }</h2>
                    <p className={ styles.profession }>{ props.profession }</p>
                    <p className={ styles.short }>{ props.aboutShort }</p>
                </div>
                <div className={ `${styles.bioFooter} ${props.website ? styles.website : null}` }>
                    { props.website
                        ? <a href={ props.website } target="_blank">{ prettyUrl(props.website) }</a>
                        : null }
                    <button onClick={ props.edit }>edit</button>
                </div>
            </div>
        </header>
    );
};

export default ProfileHeader;