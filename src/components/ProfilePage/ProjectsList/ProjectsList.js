import React from 'react';
import styles from './ProjectsList.module.css';

import specialImage from '../../../images/special-image.png';
import tvShowImage from '../../../images/tv-header-image.png';

const ProjectsList = (props) => {

    let projectsList = [];
    if (props.projects) {
        projectsList = Object.keys(props.projects).map(projectId => {

            let defaultHeaderImage;
            if (props.projects[projectId].type === 'special') defaultHeaderImage = specialImage;
            if (props.projects[projectId].type === 'tv show') defaultHeaderImage = tvShowImage;

            return (
                <article key={ projectId }>
                    <div className={ styles.articleHeaderImg }>
                        <img src={ props.projects[projectId].headerImage ? props.projects[projectId].headerImage : defaultHeaderImage } alt="Project header" />
                    </div>
                    <div className={ styles.articleBody }>
                        <div className={ styles.inline }>
                            <h3 className={ styles.articleHeading }>{ props.projects[projectId].name }</h3>
                            <div className={ styles.date }>{ props.projects[projectId].date }</div>
                        </div>
                        {
                        props.projects[projectId].place && props.projects[projectId].city ?
                            <p className={ styles.place }>@ { props.projects[projectId].place }, { props.projects[projectId].city }</p> :
                            null
                        }
                        <p>{ props.projects[projectId].short }</p>
                        <div className={ styles.articleFooter }>
                            <button className={ styles.moreDetailsBtn }>More details</button>
                        </div>
                    </div>
                </article>
            );
        });
    }

    return (
        <section className={ styles.projects }>
            { projectsList }
        </section>
    );
};

export default ProjectsList;