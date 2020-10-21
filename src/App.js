import React, { useState, useEffect, useRef, Fragment } from 'react';
import gsap from 'gsap';
import Navigation from './components/navigation';
import Banner from './components/banner';

// BG IMAGES
import img1 from './assets/img/pexels-ray-piedra-1565982.jpg';
import img2 from './assets/img/pexels-photo-3952043.jpeg';
import img3 from './assets/img/pexels-klayfe-rohden-873653.jpg';

// ANIMATION IMGS
import paster from './assets/img/plate-of-paster.png';
import garnish from './assets/img/leaf.png';
import tomato from './assets/img/tomato.png';
import pastaFork from './assets/img/pasta-fork.png';

import './styles/main.scss';

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const viewPortAnimation = (dimensions) => {
  // viewport animations
  if (dimensions.width >= 726) {
    // desktop animations
  } else {
    // mobile animations
  }
};

const App = () => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    // prevents flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } });

    // handles resize
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    viewPortAnimation(dimensions);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  // Time lines
  const introTL = gsap.timeline();
  const bannerTL = gsap.timeline();

  // Animate intro
  let aniIntroText = useRef(null);
  let aniIntroLayer = useRef(null);

  // Animate banner
  let aniBannerText = useRef([]);

  useEffect(() => {
    introTL
      .from(aniIntroText.current, {
        delay: 1,
        duration: 1.3,
        opacity: 0,
        ease: 'sine.out',
      })
      .to(aniIntroText.current, {
        delay: 0.8,
        duration: 1.3,
        autoAlpha: 0,
        ease: 'sine.out',
      })
      .to(aniIntroLayer.current, { duration: 1, autoAlpha: 0 })
      .to('body', { overflowY: 'auto' });

    bannerTL.from(aniBannerText.current, {
      delay: 5,
      duration: 0.8,
      y: 20,
      opacity: 0,
      stagger: { amount: 0.25 },
    });
  });

  return (
    <Fragment>
      <Navigation />
      <div ref={aniIntroLayer} className="intro-layer">
        <span ref={aniIntroText}>Welcome</span>
      </div>
      <Banner
        content={
          <h1>
            <span ref={(el) => aniBannerText.current.push(el)}>Faicco's</span>
            <span ref={(el) => aniBannerText.current.push(el)}>
              Italian Specialities
            </span>
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
          <h4>Crostata</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            doloremque cum nobis repellendus laudantium quaerat debitis.
          </p>
          <h6>from $15.40</h6>
        </div>
        <div className="showcase__item"></div>
        <div className="showcase__item">
          <h4>Semifreddo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            doloremque cum nobis repellendus laudantium quaerat debitis.
          </p>
          <h6>from $15.40</h6>
        </div>
        <div className="showcase__item"></div>

        <div className="showcase__item"></div>

        <div className="showcase__item">
          <h4>Bruschetta</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            doloremque cum nobis repellendus laudantium quaerat debitis.
          </p>
          <h6>from $15.40</h6>
        </div>
        <div className="showcase__item"></div>

        <div className="showcase__item">
          <h4>Panzenella</h4>
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

        <div className="menu-margin">
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

        {/* FOOD DISPLAY (ANIMATED) */}
        <img className="menu__img1" src={paster} alt="Plate of paster" />
        <img
          className="menu__img1 menu__leaf1"
          src={garnish}
          alt="Leaf garnish"
        />
        <img
          className="menu__img1 menu__leaf2"
          src={garnish}
          alt="Leaf garnish"
        />
        <img
          className="menu__img1 menu__leaf3"
          src={garnish}
          alt="Leaf garnish"
        />

        <img className="menu__img2" src={tomato} alt="Plate of paster" />

        <img className="menu__img3" src={pastaFork} alt="Plate of paster" />
      </div>
    </Fragment>
  );
};

export default App;
