import React from 'react';
import styles from './EmployeeListHeader.module.css';

import TopBar from '../UI/TopBar/TopBar';
import Search from '../../containers/HomePage/EmployeeListHeader/Search/Search';
import AvailabilityFilter from './AvailabilityFilter/AvailabilityFilter';
import SkillsFilter from '../../containers/HomePage/EmployeeListHeader/SkillsFilter/SkillsFilter';

function EmployeeListHeader (props) {
    return (
        <div className={ styles.EmployeeListHeader }>
            <TopBar addNew={ true } />
            <Search submitSearch={ props.submitSearch } />
            <AvailabilityFilter
                availabilityChecked={ props.availabilityChecked }
                applyAvailabilityFilter={ props.applyAvailabilityFilter } />
            <SkillsFilter
                selectedSkills={ props.selectedSkills }
                clearSkillsFilter={ props.clearSkillsFilter }
                applySkillsFilter={ props.applySkillsFilter } />
        </div>
    );
}

export default EmployeeListHeader;