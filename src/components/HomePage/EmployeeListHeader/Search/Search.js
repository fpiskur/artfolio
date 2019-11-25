import React, { Component } from 'react';
import styles from './Search.module.css';

class Search extends Component {

    searchTerm = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitSearch(this.searchTerm.current.value);
    }

    render () {
        return (
            <form onSubmit={ this.handleSubmit } className={ styles.Search }>
                <input ref={ this.searchTerm } type="text" placeholder="Search by name or profession" />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default Search;