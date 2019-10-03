import React from 'react';
import itemStyles from '../formItems.module.css';
import styles from './FormItemNestedList.module.css';

import NestedListItem from './NestedListItem/NestedListItem';

function FormItemNestedList (props) {

    const listItems = props.items.map(item => (
        item.skillsList ?
            <NestedListItem
                key={ item.category }
                category={ item.category.toUpperCase() + ':' }
                items={ item.skillsList } /> :
            null
    ));

    const categoryItems = props.items.map(item => (
        <option key={ item.category } value={ item.category }>{ item.category }</option>
    ));

    return (
        <div className={ itemStyles.formItem }>
            <label htmlFor={ props.id }>{ props.label }</label>
            <div className={ styles.addSkill }>
                <input id={ props.id } type="text" placeholder={ props.placeholder } />
                <select>
                    <option value="">--category--</option>
                    { categoryItems }
                </select>
                <button>Add skill</button>
            </div>
            <div className={ styles.skills }>
                { listItems }
            </div>
        </div>
    );
}

export default FormItemNestedList;