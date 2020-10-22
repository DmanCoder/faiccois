import React, { useState, useEffect, useRef, Fragment } from 'react';
import gsap from 'gsap';

import Navigation from './components/navigation';
import Banner from './components/banner';
import { introAnimation } from './animations/introAnimation';
import { aboutAnimation } from './animations/aboutAnimation';
import { showcaseAnimation } from './animations/showcaseAnimation';
import { menuAnimations } from './animations/menuAnimations';
import { menuImagesAnimation } from './animations/menuImagesAnimation';

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

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const App = () => {
  // Animate intro
  let aniIntroText = useRef(null);
  let aniIntroLayer = useRef(null);
  let aniBannerText = useRef([]);

  // About animation
  let aniAbout = useRef([]);

  // Showcase Animation
  let aniShowCase = useRef([]);

  // Animate Menu
  let aniMenuTitle = useRef();
  let aniMenuSubTitle = useRef();
  let aniMenuItemsLeft = useRef([]);
  let aniMenuItemsRight = useRef([]);
  let aniMenuSubTitle2 = useRef();
  let aniMenuItemsLeft2 = useRef([]);
  let aniMenuItemsRight2 = useRef([]);

  // Animate Images
  let aniPastaIMG = useRef();
  let aniLeavesIMG = useRef([]);
  let aniTomatoIMG = useRef();
  let aniForkIMG = useRef();

  useEffect(() => {
    introAnimation({ aniIntroText, aniIntroLayer, aniBannerText });
    aboutAnimation({ aniAbout });
    showcaseAnimation({ aniShowCase });
    menuAnimations({
      aniMenuTitle,
      aniMenuSubTitle,
      aniMenuItemsLeft,
      aniMenuItemsRight,
      aniMenuSubTitle2,
      aniMenuItemsLeft2,
      aniMenuItemsRight2,
    });
    menuImagesAnimation({
      aniPastaIMG,
      aniLeavesIMG,
      aniTomatoIMG,
      aniForkIMG,
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
        <div ref={(el) => aniAbout.current.push(el)} className="about__item">
          <h4>Reservations</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            minima tempora eligendi sunt eiu.
          </p>

          <button>Book A Table</button>
        </div>
        <div
          ref={(el) => aniAbout.current.push(el)}
          className="about__item"
        ></div>
        <div
          ref={(el) => aniAbout.current.push(el)}
          className="about__item"
        ></div>
        <div ref={(el) => aniAbout.current.push(el)} className="about__item">
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
        <div
          ref={(el) => aniShowCase.current.push(el)}
          className="showcase__item"
        >
          <h4>Crostata</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            doloremque cum nobis repellendus laudantium quaerat debitis.
          </p>
          <h6>from $15.40</h6>
        </div>
        <div
          ref={(el) => aniShowCase.current.push(el)}
          className="showcase__item"
        ></div>
        <div
          ref={(el) => aniShowCase.current.push(el)}
          className="showcase__item"
        >
          <h4>Semifreddo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            doloremque cum nobis repellendus laudantium quaerat debitis.
          </p>
          <h6>from $15.40</h6>
        </div>
        <div
          ref={(el) => aniShowCase.current.push(el)}
          className="showcase__item"
        ></div>

        <div
          ref={(el) => aniShowCase.current.push(el)}
          className="showcase__item"
        ></div>

        <div
          ref={(el) => aniShowCase.current.push(el)}
          className="showcase__item"
        >
          <h4>Bruschetta</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            doloremque cum nobis repellendus laudantium quaerat debitis.
          </p>
          <h6>from $15.40</h6>
        </div>
        <div
          ref={(el) => aniShowCase.current.push(el)}
          className="showcase__item"
        ></div>

        <div
          ref={(el) => aniShowCase.current.push(el)}
          className="showcase__item"
        >
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
        <h4 ref={aniMenuTitle}>Menu</h4>
        <h5 ref={aniMenuSubTitle}>Food & Aperitives</h5>

        <div className="menu__items">
          <div
            ref={(el) => aniMenuItemsLeft.current.push(el)}
            className="menu__item"
          >
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
          <div
            ref={(el) => aniMenuItemsRight.current.push(el)}
            className="menu__item"
          >
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
          <div
            ref={(el) => aniMenuItemsLeft.current.push(el)}
            className="menu__item"
          >
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
          <div
            ref={(el) => aniMenuItemsRight.current.push(el)}
            className="menu__item"
          >
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
          <div
            ref={(el) => aniMenuItemsLeft.current.push(el)}
            className="menu__item"
          >
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

          <div
            ref={(el) => aniMenuItemsRight.current.push(el)}
            className="menu__item"
          >
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
          <div
            ref={(el) => aniMenuItemsLeft.current.push(el)}
            className="menu__item"
          >
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
          <div
            ref={(el) => aniMenuItemsRight.current.push(el)}
            className="menu__item"
          >
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
          <h5 ref={aniMenuSubTitle2}>Deserts</h5>
          <div className="menu__items">
            <div
              ref={(el) => aniMenuItemsLeft2.current.push(el)}
              className="menu__item"
            >
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
            <div
              ref={(el) => aniMenuItemsRight2.current.push(el)}
              className="menu__item"
            >
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
            <div
              ref={(el) => aniMenuItemsLeft2.current.push(el)}
              className="menu__item"
            >
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
            <div
              ref={(el) => aniMenuItemsRight2.current.push(el)}
              className="menu__item"
            >
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
            <div
              ref={(el) => aniMenuItemsLeft2.current.push(el)}
              className="menu__item"
            >
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
        <img
          ref={aniPastaIMG}
          className="menu__img1"
          src={paster}
          alt="Plate of paster"
        />
        <img
          ref={(el) => aniLeavesIMG.current.push(el)}
          className="menu__img1 menu__leaf1"
          src={garnish}
          alt="Leaf garnish"
        />
        <img
          ref={(el) => aniLeavesIMG.current.push(el)}
          className="menu__img1 menu__leaf2"
          src={garnish}
          alt="Leaf garnish"
        />
        <img
          ref={(el) => aniLeavesIMG.current.push(el)}
          className="menu__img1 menu__leaf3"
          src={garnish}
          alt="Leaf garnish"
        />

        <img
          ref={aniTomatoIMG}
          className="menu__img2"
          src={tomato}
          alt="Plate of paster"
        />

        <img
          ref={aniForkIMG}
          className="menu__img3"
          src={pastaFork}
          alt="Plate of paster"
        />
      </div>
    </Fragment>
  );
};

export default App;
