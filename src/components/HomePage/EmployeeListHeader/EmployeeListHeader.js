import React from 'react';
import styles from './EmployeeListHeader.module.css';

import Search from './Search/Search';
import AvailabilityFilter from './AvailabilityFilter/AvailabilityFilter';
import SkillsFilter from '../../../containers/HomePage/EmployeeListHeader/SkillsFilter/SkillsFilter';

function EmployeeListHeader (props) {
    return (
        <div className={ styles.EmployeeListHeader }>
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