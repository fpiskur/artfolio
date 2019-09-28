import React from 'react';

import TopBar from '../../components/UI/TopBar/TopBar';

function AddNewEmployee () {
    return (
        <div>
            <TopBar addNew={ false } />
            <h2>Add New Employee</h2>
            <div className="col-left"></div>
            <div className="col-right"></div>
            <div className="col-left"></div>
            <div className="col-right"></div>
        </div>
    );
}

export default AddNewEmployee;