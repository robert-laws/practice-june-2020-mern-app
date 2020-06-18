import React from 'react';

const Avatar = (props) => {
  const { image, alt, width, height } = props;

  return (
    <div>
      <img src={image} alt={alt} style={{ width, height }} />
    </div>
  );
};

export default Avatar;
