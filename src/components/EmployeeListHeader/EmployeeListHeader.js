import React from 'react';
import styles from './EmployeeListHeader.module.css';

import TopBar from './TopBar/TopBar';
import Search from '../../containers/EmployeeListHeader/Search/Search';
import AvailabilityFilter from './AvailabilityFilter/AvailabilityFilter';
import SkillsFilter from '../../containers/EmployeeListHeader/SkillsFilter/SkillsFilter';

function EmployeeListHeader (props) {
    return (
        <div className={ styles.EmployeeListHeader }>
            <TopBar />
            <Search submitSearch={ props.submitSearch } />
            <AvailabilityFilter applyAvailabilityFilter={ props.applyAvailabilityFilter } />
            <SkillsFilter
                selectedSkills={ props.selectedSkills }
                clearSkillsFilter={ props.clearSkillsFilter }
                applySkillsFilter={ props.applySkillsFilter } />
        </div>
    );
}

export default EmployeeListHeader;