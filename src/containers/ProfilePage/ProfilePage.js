import React, { Component } from 'react';
import styles from './ProfilePage.module.css';

import headerImage from '../../images/profile-header-image.png';
import profileImage from '../../images/fa-user.png';
import specialImage from '../../images/special-image.png';
import tvShowImage from '../../images/tv-header-image.png';
import TopBar from '../../components/UI/TopBar/TopBar';

class ProfilePage extends Component {

    render () {

        return (
            <React.Fragment>
                <TopBar />
                <header>
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
                            <a href="#" target="_blank">www.mywebsite.com</a>
                            <button>edit</button>
                        </div>
                    </div>
                </header>
                <main>
                    <div className={ styles.navigation }>
                        <button>Projects</button>
                        <button>About me</button>
                    </div>
                    <section className={ styles.projects }>
                        <article>
                            <div className={ styles.articleHeaderImg }>
                                <img src={ specialImage } alt="Project header" />
                            </div>
                            <div className={ styles.articleBody }>
                                <div className={ styles.inline }>
                                    <h3 className={ styles.articleHeading }>Sticks and Stones</h3>
                                    <div className={ styles.date }>2018-07-12</div>
                                </div>
                                <p className={ styles.place }>@ Purgeraj, Zagreb</p>
                                <p>Venenatis commodo non suscipit taciti mi adipiscing dictum ullamcorper faucibus a euismod vestibulum scelerisque a a aliquam faucibus ac nunc bibendum hac torquent quam himenaeos habitant ac eros tristique. Amet hendrerit leo orci elit a ridiculus suspendisse sociosqu dapibus sapien euismod at porttitor ut lorem sodales et rhoncus. A ac.</p>
                                <div className={ styles.articleFooter }>
                                    <button>More details</button>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className={ styles.articleHeaderImg }>
                                <img src={ tvShowImage } alt="Project header" />
                            </div>
                        </article>
                        <article>
                            <div className={ styles.articleHeaderImg }>
                                <img src={ specialImage } alt="Project header" />
                            </div>
                        </article>
                        <article>
                            <div className={ styles.articleHeaderImg }>
                                <img src={ tvShowImage } alt="Project header" />
                            </div>
                        </article>
                    </section>
                </main>

            </React.Fragment>
        );
    }
}

export default ProfilePage;