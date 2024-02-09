import React from 'react';
import { MdPentagon } from "react-icons/md";
import './circle.css'
import CustomSlider from './slider';


const ThreeInLineContainer = () => {
  return (
    <div className="container">
      <div className="circle-container">
        <MdPentagon className="circle" />
      </div>
      <CustomSlider/>
      <div className="circle-container">
        <MdPentagon className="circle" />
      </div>
    </div>
  );
};

export default ThreeInLineContainer;

