import React from 'react';
import styles from './AboutMe.module.css';

const AboutMe = (props) => {
    return (
        <section className={ styles.aboutMe }>

            {/* AboutLong component */}
            <div className={ styles.aboutLong }>
                <h3>About me</h3>
                <p>{ props.aboutLong }</p>
            </div>

            {/* NestedList component */}
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

            {/* FlatList component */}
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

            {/* FlatList component */}
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
    );
}

export default AboutMe;