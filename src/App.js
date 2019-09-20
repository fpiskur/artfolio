import React, { Component } from 'react';
import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeListHeader from './components/EmployeeList/EmployeeListHeader/EmployeeListHeader';
import './App.css';
import axios from './axios';


class App extends Component {

  state = {
    comedians: []
  };

  componentDidMount () {
    axios.get('/comedians.json')
      .then(response => {
        console.log(response.data);
        this.setState({ comedians: response.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render () {
    return (
      <div className="App">
        <EmployeeListHeader />
        <EmployeeList />
      </div>
    );
  }
}

export default App;
