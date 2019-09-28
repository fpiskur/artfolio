import React, { Component } from 'react';
import styles from './Search.module.css';

class Search extends Component {

    state= {
        searchTerm: ''
    }

    handleInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitSearch(this.state.searchTerm);
    }

    render () {
        return (
            <form onSubmit={ this.handleSubmit } className={ styles.Search }>
                <input onChange={ this.handleInputChange } type="text" placeholder="Search by name or profession" value={ this.state.searchTerm } />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default Search;