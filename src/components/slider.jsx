import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/system';

const GreySlider = styled(Slider)({
  color: 'grey',
});

function CustomSlider({ onSliderChange }) {
  const [sliderValue, setSliderValue] = useState(271);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    onSliderChange(newValue);
  };

  return (
    <GreySlider
      value={sliderValue}
      onChange={handleChange}
      defaultValue={271}
      max={300}
      valueLabelDisplay="auto"
      aria-label="Default"
    />
  );
}

export default CustomSlider;
