import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './details.css';

const marks = {
  0: {
    style: {
      color: 'white',
    },
    label: <strong></strong>,
  },
  50: {
    style: {
      color: 'white',
    },
    label: <strong></strong>,
  },
  100: {
    style: {
      color: 'white',
    },
    label: <strong></strong>,
  },
};

const Slidermark = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <>
      <div className="circle-button">•0</div>
      <div className="slider-mark">
        <div className="slider-container">
          <Slider
            min={0}
            max={100}
            marks={marks}
            step={1}
            trackStyle={{ backgroundColor: 'grey' }}
            handleStyle={{
              borderColor: 'grey',
              backgroundColor: 'grey',
            }}
            railStyle={{ backgroundColor: 'grey' }}
            onChange={handleSliderChange}
          />
        </div>
      </div>
      <div className="circle-button">•{sliderValue}</div>
    </>
  );
};

export default Slidermark;
