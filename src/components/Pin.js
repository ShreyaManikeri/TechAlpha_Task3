import React, { useState } from 'react';


const Pin = ({ size, imgsrc, link, name}) => {
  const [isLarge, setIsLarge] = useState(false);

  const handleClick = () => {
    setIsLarge(prevIsLarge => !prevIsLarge);  
  };
  return (
    <div className={`pin pin-${size}`} onClick={handleClick}>
      <div className='demo'> 
      <a href={link} target="_blank" rel="noopener noreferrer">
      <img
          className={`mainPic ${isLarge ? 'large' : ''}`}
          src={imgsrc}
          alt=''
          onClick={handleClick}
        />
      </a>
      </div>
    </div>
  );
};

export default Pin;
