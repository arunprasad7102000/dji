import React from 'react'
import './console.css'
import './sidebar.css'
import { FaVideo, FaImage } from 'react-icons/fa';


function Map() {
    return (
        <div>
            <div className='button-group'>
                <button className="grey-capsule-button">
                    <FaVideo className="icon" />video</button>
                <button className="grey-capsule-button"><FaImage className="icon" />photo</button>
            </div>
            <div className='image-container'>
                <img className='map' src="/src/assets/map.png" alt="map" />
            </div>
        </div>
    )
}

export default Map
