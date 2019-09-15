import React from 'react';
import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeListHeader from './components/EmployeeList/EmployeeListHeader/EmployeeListHeader';
import './App.css';

function App() {
  return (
    <div className="App">
      <EmployeeListHeader />
      <EmployeeList />
    </div>
  );
}

export default App;
