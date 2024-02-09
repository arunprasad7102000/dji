import React, { useState } from 'react';

const ToggleSlider = () => {
  const [isVideoMode, setIsVideoMode] = useState(false);

  const handleToggle = () => {
    setIsVideoMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isVideoMode}
          onChange={handleToggle}
        />
        {isVideoMode ? 'Video' : 'Photo'}
      </label>

      <div>
        {isVideoMode ? (
          <video width="320" height="240" controls>
            <source src="your-video-source.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src="your-photo-source.jpg"
            alt="Your Photo"
            style={{ width: '320px', height: '240px' }}
          />
        )}
      </div>
    </div>
  );
};

export default ToggleSlider;
