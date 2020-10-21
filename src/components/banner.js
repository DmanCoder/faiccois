import React from 'react';

const Banner = ({ content, img, height, y, extClass }) => {
  const style = {
    backgroundImage: `-webkit-linear-gradient(rgb(0 0 0 / 25%), rgb(0 0 0 / 25%)), url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: `${height}vh`,
    position: 'relative',
    top: `${y}rem`,
  };

  return (
    <div className={`banner ${extClass}`} style={style}>
      {content}
    </div>
  );
};

export default Banner;
