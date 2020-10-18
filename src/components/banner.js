import React from 'react';

const Banner = ({ title, subTitle, img }) => {
  const style = {
    backgroundImage: `-webkit-linear-gradient(rgb(0 0 0 / 25%), rgb(0 0 0 / 25%)), url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  console.log(style);

  return (
    <div className="banner" style={style}>
      <h1>
        <span>{title}</span>
        <span>{subTitle}</span>
      </h1>
    </div>
  );
};

export default Banner;
