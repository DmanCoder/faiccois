import React from 'react';

const Banner = ({ content, img, height }) => {
  const style = {
    backgroundImage: `-webkit-linear-gradient(rgb(0 0 0 / 25%), rgb(0 0 0 / 25%)), url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: `${height}vh`,
  };

  return (
    <div className="banner" style={style}>
      {content}
    </div>
  );
};

export default Banner;
