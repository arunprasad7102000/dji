import React from 'react';
import './sidebar.css';

function Button({ name }) {
    return (
        <button className='sidebar-button'>
            {name}
        </button>
    );
}

export default Button;

