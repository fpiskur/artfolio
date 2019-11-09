import React, { Component } from 'react';
import styles from './ProfilePage.module.css';

import headerImage from '../../images/profile-header-image.png';
import profileImage from '../../images/fa-user.png';
import TopBar from '../../components/UI/TopBar/TopBar';

class ProfilePage extends Component {

    render () {

        return (
            <React.Fragment>
                <TopBar />
                <header className={ styles.ProfilePage }>
                    <div className={ styles.images }>
                        <div className={ styles.headerImage }>
                            <img src={ headerImage } alt="Header" />
                        </div>
                        <div className={ styles.profileImage }>
                            <img src={ profileImage } alt="Profile" />
                        </div>
                    </div>
                    <div className={ styles.info }>
                        <div className={ styles.availability }>
                            <select>
                                <option>Available</option>
                                <option>Not available</option>
                            </select>
                        </div>
                        <div className={ styles.bio }>
                            <h2>Jim Jimson</h2>
                            <p className={ styles.profession }>Actor, stand-up comedian</p>
                            <p className={ styles.short }>Parturient metus rhoncus ullamcorper eu rhoncus erat proin placerat sem elit volutpat bibendum vivamus dui a in curabitur scelerisque a scelerisque tincidunt lobortis.</p>
                        </div>
                        <div className={ styles.bioFooter }>
                            <a href="#">www.mywebsite.com</a>
                            <button>edit</button>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default ProfilePage;