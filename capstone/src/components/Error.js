import React from 'react';

const Error = ({ message }) => {
return (
    <div className='ui error message'>
    <i className='close icon'></i>
    <div className='header'>There was an error while fetching your data</div>
    <ul className='list'>
        <li>{message}</li>
    </ul>
    </div>
);
};

export default Error;