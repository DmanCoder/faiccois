import React, { Fragment } from 'react';

import Navigation from './components/navigation';
import Banner from './components/banner';

import img1 from './assets/img/pexels-photo-3952043.jpeg';

import './styles/main.scss';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Banner title="" subTitle="" img={img1} />
    </Fragment>
  );
}

export default App;
