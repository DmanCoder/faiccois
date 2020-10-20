import React, { Fragment } from 'react';

import Navigation from './components/navigation';
import Banner from './components/banner';

import img1 from './assets/img/pexels-ray-piedra-1565982.jpg';
import img2 from './assets/img/pexels-photo-3952043.jpeg';
import img3 from './assets/img/pexels-klayfe-rohden-873653.jpg';

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
            minima tempora eligendi sunt eiu.
          </p>

          <button>Book A Table</button>
        </div>
        <div className="about__item"></div>
        <div className="about__item"></div>
        <div className="about__item">
          <h4>About</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            voluptatum odio aliquid, rem sapiente exercitationem eum quas
            numquam neque ea quo assumenda explicabo, ipsum modi libero ullam
            eius soluta? Ut? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Autem voluptatum odio aliquid, rem sapiente exercitationem eum
            quas numquam neque ea quo assumenda explicabo, ipsum modi libero
            ullam eius soluta? Ut?
          </p>
        </div>
      </div>

      <Banner
        extClass="banner-others"
        content={
          <h1>
            <span></span>
            <span>Our Specialities</span>
          </h1>
        }
        display="none"
        img={img2}
        height="75"
        y="-6"
      />

      <div className="showcase">
        <div className="showcase__item">
          <h4>Lasagna</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            doloremque cum nobis repellendus laudantium quaerat debitis.
          </p>
          <h6>from $15.40</h6>
        </div>
        <div className="showcase__item"></div>
        <div className="showcase__item">
          <h4>Lasagna</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            doloremque cum nobis repellendus laudantium quaerat debitis.
          </p>
          <h6>from $15.40</h6>
        </div>
        <div className="showcase__item"></div>

        <div className="showcase__item"></div>

        <div className="showcase__item">
          <h4>Lasagna</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            doloremque cum nobis repellendus laudantium quaerat debitis.
          </p>
          <h6>from $15.40</h6>
        </div>
        <div className="showcase__item"></div>

        <div className="showcase__item">
          <h4>Lasagna</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            doloremque cum nobis repellendus laudantium quaerat debitis.
          </p>
          <h6>from $15.40</h6>
        </div>
      </div>

      <Banner
        extClass="banner-others"
        content={
          <h1>
            <span></span>
            <span></span>
          </h1>
        }
        display="none"
        img={img3}
        height="75"
      />

      <div className="menu">
        <h4>Menu</h4>
        <h5>Food & Aperitives</h5>
        <div className="menu__items">
          <div className="menu__item">
            <div className="menu__content">
              <h6>Pizza Mexicana</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem consequuntur nulla in amet consec,
                laudantium........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Pizza Mexicana</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem consequuntur nulla in amet consec,
                laudantium........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Pizza Quatro Stagioni</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem consequuntur nulla in amet consec,
                laudantium........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Pizza Quatro formagi</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem consequuntur nulla in amet consec,
                laudantium........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Pizza Carnivora</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem consequuntur nulla in amet consec,
                laudantium........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Lasagna</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem consequuntur nulla in amet consec,
                laudantium........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Lasagna Napolitana</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem consequuntur nulla in amet consec,
                laudantium........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item">
            <div className="menu__content">
              <h6>Other lasagna</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem consequuntur nulla in amet consec,
                laudantium........................................
              </p>
            </div>

            <span className="menu__price">$17</span>
          </div>
          <div className="menu__item"></div>
        </div>

        <div className="menu menu-margin">
          <h5>Deserts</h5>
          <div className="menu__items">
            <div className="menu__item">
              <div className="menu__content">
                <h6>Tiramsiu</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem consequuntur nulla in amet consec,
                  laudantium........................................
                </p>
              </div>

              <span className="menu__price">$17</span>
            </div>
            <div className="menu__item">
              <div className="menu__content">
                <h6>Cannoli</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem consequuntur nulla in amet consec,
                  laudantium........................................
                </p>
              </div>

              <span className="menu__price">$17</span>
            </div>
            <div className="menu__item">
              <div className="menu__content">
                <h6>Double Choco Biscotti</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem consequuntur nulla in amet consec,
                  laudantium........................................
                </p>
              </div>

              <span className="menu__price">$17</span>
            </div>
            <div className="menu__item">
              <div className="menu__content">
                <h6>Sicilian Ricotta</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem consequuntur nulla in amet consec,
                  laudantium........................................
                </p>
              </div>

              <span className="menu__price">$17</span>
            </div>
            <div className="menu__item">
              <div className="menu__content">
                <h6>Pizzelles</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem consequuntur nulla in amet consec,
                  laudantium........................................
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
