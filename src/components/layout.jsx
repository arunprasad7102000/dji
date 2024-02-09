import React from 'react';
import './layout.css';
import Sidebar from './sidebar';
import Details from './details';
import Console from './console';

const Layout = () => {
    return (
        <div className="grid-container">
            <Sidebar />
            <div className="column2">
                <div className='item1'>
                
                    <img src='/src/assets/drone.png' alt='mountain' />
                </div>
                <div className="item2">
                    <Console/>
                </div>
            </div>
            <div className="column3">
                <div className="item3"><Details/></div>
                <div className="item4"></div>
            </div>
        </div>
    );
};

export default Layout;
