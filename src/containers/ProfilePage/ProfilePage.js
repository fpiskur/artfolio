import React, { Component } from 'react';
import './ProfilePage.css';
import { artfoliodb } from '../../firebase';

import Spinner from '../../components/UI/Spinner/Spinner';
import TopBar from '../../components/UI/TopBar/TopBar';
import ProfileHeader from '../../components/ProfilePage/ProfileHeader/ProfileHeader';
import ProfileNavigation from '../../components/ProfilePage/ProfileNavigation/ProfileNavigation';
import ProjectsList from '../../components/ProfilePage/ProjectsList/ProjectsList';
import AboutMe from '../../components/ProfilePage/AboutMe/AboutMe';

class ProfilePage extends Component {

    state = {
        employee: {},
        loading: true,
        activeNav: 'about'
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

    handleNavigationChange = (event) => {
        let activeNav = event.target.value;
        this.setState({ activeNav: activeNav });
    };

    render () {

        let mainContent = null;
        if (this.state.activeNav === 'about') {
            mainContent = <AboutMe
                            aboutLong={ this.state.employee.aboutLong }
                            skills={ this.state.employee.skills }
                            education={ this.state.employee.education }
                            workshops={ this.state.employee.workshops } />;
        }
        if (this.state.activeNav === 'projects') {
            mainContent = <ProjectsList projects={ this.state.employee.projectsShort } />;
        }

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

                    <main>
                        <ProfileNavigation active={ this.state.activeNav } change={ this.handleNavigationChange } />
                        { mainContent }
                    </main>
                </React.Fragment>
                }

            </React.Fragment>
        );
    }
}

export default ProfilePage;