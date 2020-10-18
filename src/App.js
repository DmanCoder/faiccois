import React, { Fragment } from 'react';

import Navigation from './components/navigation';
import Banner from './components/banner';

import './styles/main.scss';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Banner />
    </Fragment>
  );
}

export default App;
