import React from 'react';
import styles from './AvailabilityFilter.module.css';

function AvailabilityFilter (props) {
    return (
        <div className={ styles.activeFilter }>
            <input
                type="radio"
                name="availability"
                id="all"
                value="All"
                onChange={ props.applyAvailabilityFilter }
                defaultChecked />
            <label htmlFor="all">All</label>|
            <input
                type="radio"
                name="availability"
                id="available"
                value="Available"
                onChange={ props.applyAvailabilityFilter } />
            <label htmlFor="available">Available</label>|
            <input
                type="radio"
                name="availability"
                id="not-available"
                value="Not available"
                onChange={ props.applyAvailabilityFilter } />
            <label htmlFor="not-available">Not available</label>
        </div>
    );
}

export default AvailabilityFilter;