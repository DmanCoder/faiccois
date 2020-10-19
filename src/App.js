import React, { Fragment } from 'react';

import Navigation from './components/navigation';
import Banner from './components/banner';

import img1 from './assets/img/pizza-3007395_1920.jpg';
// import img1 from './assets/img/pizza-on-grey.jpg';
// import img1 from './assets/img/pizza-on-grey.jpg';

import './styles/main.scss';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Banner
        content={
          <h1>
            <span>Faicco's</span>
            <span>Italian Specialities</span>
          </h1>
        }
        img={img1}
        height="100"
      />

      <div className="about">
        <div className="about__item">
          <h4>Reservations</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            minima tempora eligendi sunt eius fugit architecto. Sapiente, sequi.
          </p>

          <button>Book A Table</button>
        </div>
        <div className="about__item"></div>
        <div className="about__item"></div>
        <div className="about__item">
          <h4>About</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            minima tempora eligendi sunt eius fugit architecto. Sapiente, sequi.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
