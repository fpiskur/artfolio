import React from 'react';
import itemStyles from '../formItems.module.css';
import styles from './FormItemList.module.css';

import ListItem from './ListItem/ListItem';

function FormItemList (props) {

    const listItems = props.items.map(item => {
        let itemKey, itemTitle, itemSubtitle, itemDate;
        if ( props.label === 'Specials' ) {
            itemKey = item.name + item.date;
            itemTitle = item.name;
            itemSubtitle = '@ ' + item.place;
            itemDate = item.date;
        } else if ( props.label === 'TV Shows' ) {
            itemKey = item.name + item.date;
            itemTitle = item.name;
            itemSubtitle = null;
            itemDate = item.date;
        } else if ( props.label === 'Education' ) {
            itemKey = item.institution + item.endYear;
            itemTitle = item.institution;
            itemSubtitle = item.title;
            itemDate = item.startYear + '. - ' + item.endYear + '.';
        } else if ( props.label === 'Workshops' ) {
            itemKey = item.workshop + item.monts + item.year;
            itemTitle = item.workshop;
            itemSubtitle = 'with ' + item.teacher;
            itemDate = item.month + '. ' + item.year + '.';
        } else return null;
        
        return <ListItem
            key={ itemKey }
            title={ itemTitle }
            subtitle={ itemSubtitle }
            date={ itemDate } />;
    });

    return (
        <div className={ itemStyles.formItem }>
            <div className={ styles.labelInline }>
                <label>{ props.label }</label>
                <button className={ styles.addItemBtn }><i className="fas fa-plus"></i></button>
            </div>
            <ul className={ styles.projectsList }>
                { listItems }
            </ul>
        </div>
    );
}

export default FormItemList;