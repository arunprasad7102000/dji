import React from 'react';
import './sidebar.css';
import {
    FaGear, FaPowerOff
} from 'react-icons/fa6';
import { RiFlag2Fill } from "react-icons/ri";
import { AiFillPicture } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { MdPentagon } from "react-icons/md";
import { PiHexagonFill, PiSunHorizonFill } from "react-icons/pi";
import Button from './button';

const Sidebar = () => {
    return (
        <div className="sidebar icon-container">
            <Button name='JCA' className='sidebar-button' />
                <div className='icon-item'>
                    <MdPentagon className='sidebar-icons' />
                </div>
                <div className='icon-item'>
                    <PiHexagonFill className='sidebar-icons' />
                </div>
                <div className='icon-item'>
                    <AiFillPicture className='sidebar-icons' />
                </div>
                <div className='icon-item'>
                    <PiSunHorizonFill className='sidebar-icons' />
                </div>
                <hr className='seperation'/>
                <div className='icon-item'>
                    <FaGear className='sidebar-icons' />
                </div>
                <div className='icon-item'>
                    <FaBell className='sidebar-icons' />
                </div>
                <div className='icon-item'>
                    <RiFlag2Fill className='sidebar-icons' />
                </div>
            <img className='sidebar-image' src='/src/assets/user.png' alt='user' />
            <hr className='seperation'/>
                <div className='icon-item'>
                    <FaPowerOff className='sidebar-icons' />
                </div>
            </div>
    );
}

export default Sidebar;
