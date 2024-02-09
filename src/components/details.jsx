import React, { useState } from 'react';
import './details.css'
import CustomSlider from './slider';
import Slidermark from './slidermark';
import { FaMoon } from "react-icons/fa";
import { MdOutlinePanoramaPhotosphere, MdHdrOnSelect } from "react-icons/md";



function Details() {
    const [altitude, setAltitude] = useState(271);
    const [sliderMarkValue, setSliderMarkValue] = useState(0);

    const handleSliderChange = (value) => {
        setAltitude(value);
        setSliderMarkValue(value);
    };
    return (
        <><div className='drone-details container'>
            <div class="drone-details-container">
                <div class="drone-details-text">
                    <h5 class="drone-details-heading">Dji Mavic Pro</h5>
                    <p class="drone-details-paragraph">FHD high-Framerate Live Feed</p>
                </div>
                <div class="drone-details-image">
                    <img src="/src/assets/DJI-Mini.png" alt="drone" />
                </div>
            </div>
        </div>
            <hr className='line' />
            <div className='container'>
                <div>
                    <p className='battery-status'>Battery status
                        <p>7 min ago</p>
                    </p>
                </div>
                <div><p id="battery-percentage">77%</p>
                </div>
            </div>
            <div className='container'>
                <div>
                    <p className='battery-status'>Altitude limited</p>
                </div>
                <div>
                    <p id="altitude">{altitude} MI</p>
                </div>
            </div>
            <CustomSlider onSliderChange={handleSliderChange} />
            <hr className='line' />
            <div className="circle-buttons">
                <Slidermark />
            </div>
            <hr className='line' />
            <div className="circle-buttons-container">
                <div className="circle-button"><MdHdrOnSelect /></div>
                <div className="circle-button"><FaMoon /></div>
                <div className="circle-button"><MdOutlinePanoramaPhotosphere /></div>
            </div>
        </>
    );
}

export default Details;
