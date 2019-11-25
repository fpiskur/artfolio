import React, { Component } from 'react';
import styles from './ProfilePage.module.css';
import { artfoliodb } from '../../firebase';

import specialImage from '../../images/special-image.png';
import tvShowImage from '../../images/tv-header-image.png';
import Spinner from '../../components/UI/Spinner/Spinner';
import TopBar from '../../components/UI/TopBar/TopBar';
import ProfileHeader from '../../components/ProfilePage/ProfileHeader/ProfileHeader';

class ProfilePage extends Component {

    state = {
        employee: {},
        loading: true
    };

    username = this.props.match.params.username;

    componentDidMount () {
        artfoliodb.collection('comedians-data').doc(this.username).get()
            .then(snapshot => {
                if (snapshot && snapshot.exists) {
                    this.setState({ employee: snapshot.data(), loading: false });
                }
            });
    }

    handleEmployeeEdit = (username) => {
        this.props.history.push({ pathname: '/employees/edit/' + username });
    };

    render () {

        return (
            <React.Fragment>
                <TopBar />
                {
                this.state.loading ? <Spinner /> :
                <React.Fragment>
                    <ProfileHeader
                        headerImage={ this.state.employee.headerImage }
                        profileImage={ this.state.employee.profileImage }
                        availability={ this.state.employee.availability }
                        name={ this.state.employee.name }
                        profession={ this.state.employee.profession }
                        aboutShort={ this.state.employee.aboutShort }
                        website={ this.state.employee.website }
                        edit={ () => this.handleEmployeeEdit(this.username) } />
                    {/* <header>
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
                                Available
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
                    </header> */}
                    <main>
                        <div className={ styles.navigation }>
                            <button>Projects</button>
                            <button>About me</button>
                        </div>

                        {/* Projects component */}
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
                                    <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma.</p>
                                    <div className={ styles.articleFooter }>
                                        <button className={ styles.moreDetailsBtn }>More details</button>
                                    </div>
                                </div>
                            </article>
                        </section>
                        
                        {/* About me component */}
                        <section className={ styles.aboutMe }>
                            <div className={ styles.aboutLong }>
                                <h3>About me</h3>
                                <p>Ut nam pulvinar nam condimentum pulvinar consectetur nisi adipiscing cum rutrum vestibulum ridiculus neque amet habitant ullamcorper at consectetur consequat nibh. Vitae adipiscing mus at volutpat a at condimentum id vestibulum vitae odio hac congue ornare eu libero semper a est dictumst molestie sapien. Eu a fringilla cubilia vulputate torquent eu id a hac non iaculis magna praesent parturient suspendisse fusce a. Eu lacinia at at himenaeos ipsum praesent enim magna elit suscipit ac scelerisque torquent parturient magna mi nulla consequat ullamcorper felis class magnis blandit a mus sem eleifend. Euismod a scelerisque duis mi himenaeos est ad vestibulum felis tempor metus suspendisse a adipiscing sed at hendrerit sit vivamus ullamcorper vestibulum consectetur natoque.</p>
                            </div>
                            <div className={ styles.skills }>
                                <h4>DANCING SKILLS:</h4>
                                <p>
                                    <span>waltz</span>
                                    <span>tango</span>
                                    <span>tap dancing</span>
                                </p>
                                <h4>MUSICAL SKILLS:</h4>
                                <p>
                                    <span>guitar</span>
                                    <span>trombone</span>
                                </p>
                                <h4>ACTING SKILLS:</h4>
                                <p>
                                    <span>comedy</span>
                                    <span>drama</span>
                                </p>
                            </div>
                            <div className={ styles.list }>
                                <h3>Education</h3>
                                <div className={ styles.listItem }>
                                    <div className={ styles.listInfo }>
                                        <h4>Whatever Academy</h4>
                                        <p>my profession</p>
                                    </div>
                                    <div className={ styles.listDate }>
                                        1999. - 2003.
                                    </div>
                                </div>
                                <div className={ styles.listItem }>
                                    <div className={ styles.listInfo }>
                                        <h4>Whatever Highschool</h4>
                                        <p>my title</p>
                                    </div>
                                    <div className={ styles.listDate }>
                                        1995. - 1999.
                                    </div>
                                </div>
                                <div className={ styles.listItem }>
                                    <div className={ styles.listInfo }>
                                        <h4>Whatever Elementary</h4>
                                        <p>something diploma</p>
                                    </div>
                                    <div className={ styles.listDate }>
                                        1987. - 1995.
                                    </div>
                                </div>
                            </div>
                            <div className={ styles.list }>
                                <h3>Workshops</h3>
                                <div className={ styles.listItem }>
                                    <div className={ styles.listInfo }>
                                        <h4>Burek workshop</h4>
                                        <p>with Pero Perić</p>
                                    </div>
                                    <div className={ styles.listDate }>
                                        September 2004.
                                    </div>
                                </div>
                                <div className={ styles.listItem }>
                                    <div className={ styles.listInfo }>
                                        <h4>Sarma workshop</h4>
                                        <p>with Đurđa Adlešić</p>
                                    </div>
                                    <div className={ styles.listDate }>
                                        January 2005.
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </React.Fragment>
                }

            </React.Fragment>
        );
    }
}

export default ProfilePage;