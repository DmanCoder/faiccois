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

      <div className="menu">
        <h4>Menu</h4>
        <h5>Food & Aperitives</h5>
        <div className="menu__items">
          <div className="menu__item">
            <div className="menu__content">
              <h6>Pizza Mexicana</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                odit possimus error...........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Pizza Mexicana</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                odit possimus error...........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Pizza Quatro Stagioni</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                odit possimus error...........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Pizza Quatro formagi</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                odit possimus error...........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Pizza Carnivora</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                odit possimus error...........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Lasagna</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                odit possimus error...........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Lasagna Napolitana</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                odit possimus error...........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Other lasagna</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                odit possimus error...........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
        </div>
        <div className="menu">
          <h5>Deserts</h5>
          <div className="menu__items">
            <div className="menu__item">
              <div className="menu__content">
                <h6>Tiramsiu</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  odit possimus error...........................................
                </p>
              </div>

              <span className="menu__price">$17</span>
            </div>
            <div className="menu__item">
              <div className="menu__content">
                <h6>Cannoli</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  odit possimus error...........................................
                </p>
              </div>

              <span className="menu__price">$17</span>
            </div>
            <div className="menu__item">
              <div className="menu__content">
                <h6>Double Choco Biscotti</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  odit possimus error...........................................
                </p>
              </div>

              <span className="menu__price">$17</span>
            </div>
            <div className="menu__item">
              <div className="menu__content">
                <h6>Sicilian Ricotta</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  odit possimus error...........................................
                </p>
              </div>

              <span className="menu__price">$17</span>
            </div>
            <div className="menu__item">
              <div className="menu__content">
                <h6>Pizzelles</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  odit possimus error...........................................
                </p>
              </div>

              <span className="menu__price">$17</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
