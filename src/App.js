import React, { useState, useEffect, useRef, Fragment } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const App = () => {
  // Time lines
  const introTL = gsap.timeline();

  // Animate intro
  let aniIntroText = useRef(null);
  let aniIntroLayer = useRef(null);

  // Scroll animation about section
  let aniAbout = useRef([]);
  let aniShowCase = useRef([]);

  // Animate banner
  let aniBannerText = useRef([]);

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

  // useEffect(() => {
  //   window.focus();
  //   window.scrollTo(0, 0);
  // });

  useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
    introTL
      .from(aniIntroText.current, {
        delay: 1,
        duration: 1.3,
        opacity: 0,
        height: 0,
        ease: 'sine.out',
      })
      .to(aniIntroText.current, {
        delay: 0.8,
        duration: 1.3,
        autoAlpha: 0,
        ease: 'sine.out',
      })
      .to(aniIntroLayer.current, { duration: 1, autoAlpha: 0 })
      .to('body', { delay: -1, overflowY: 'auto' })
      .from(aniBannerText.current, {
        delay: -1,
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: { amount: 0.25 },
      });

    gsap.from(aniAbout.current, {
      duration: 1,
      y: 250,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: '.about',
        id: 'about',
        start: 'top bottom-=150px',
        ease: 'sine.out',
      },
    });

    // Showcase animations
    gsap.utils.toArray(aniShowCase.current).forEach((el, index) => {
      if (index === 0) {
        gsap.from(el, {
          duration: 0.35,
          opacity: 0,
          delay: 0.6,
          y: -50,
          x: -50,
          stagger: { amount: 0.18 },
          scrollTrigger: {
            trigger: '.showcase',
            id: 'about',
            start: 'top bottom-=150px',
            ease: 'sine.out',
          },
        });
      }
      if (index === 1 || index === 2) {
        gsap.from(el, {
          duration: 0.35,
          opacity: 0,
          delay: 0.7,
          y: -50,
          x: 0,
          stagger: { amount: 0.18 },
          scrollTrigger: {
            trigger: '.showcase',
            id: 'about',
            start: 'top bottom-=150px',
            ease: 'sine.out',
          },
        });
      }
      if (index === 5 || index === 6) {
        gsap.from(el, {
          duration: 0.35,
          opacity: 0,
          delay: 0.8,
          y: 50,
          x: 0,
          stagger: { amount: 0.18 },
          scrollTrigger: {
            trigger: '.showcase',
            id: 'about',
            start: 'top bottom-=150px',
            ease: 'sine.out',
          },
        });
      }
      if (index === 4) {
        gsap.from(el, {
          duration: 0.35,
          opacity: 0,
          delay: 0.5,
          y: 50,
          x: -50,
          stagger: { amount: 0.18 },
          scrollTrigger: {
            trigger: '.showcase',
            id: 'about',
            start: 'top bottom-=150px',
            ease: 'sine.out',
          },
        });
      }
      if (index === 7) {
        gsap.from(el, {
          duration: 0.35,
          opacity: 0,
          delay: 0.5,
          y: 50,
          x: 50,
          stagger: { amount: 0.18 },
          scrollTrigger: {
            trigger: '.showcase',
            id: 'about',
            start: 'top bottom-=150px',
            ease: 'sine.out',
          },
        });
      }

      if (index === 3) {
        gsap.from(el, {
          duration: 0.35,
          opacity: 0,
          delay: 0.9,
          y: -50,
          x: 50,
          stagger: { amount: 0.18 },
          scrollTrigger: {
            trigger: '.showcase',
            id: 'about',
            start: 'top bottom-=150px',
            ease: 'sine.out',
          },
        });
      }
    });

    // Menu animations
    gsap.from(aniMenuTitle.current, {
      duration: 0.5,
      opacity: 0,
      y: 80,
      scrollTrigger: {
        id: 'Menu',
        trigger: aniMenuItemsLeft.current,
        start: 'top center+=500px',
        ease: 'sine.out',
      },
    });

    gsap.from(
      [
        aniMenuSubTitle.current,
        aniMenuItemsLeft.current,
        aniMenuItemsRight.current,
      ],
      {
        delay: 0.6,
        duration: 0.5,
        opacity: 0,
        y: 100,
        stagger: { amount: 0.3 },
        scrollTrigger: {
          id: 'menu-items',
          trigger: aniMenuItemsLeft.current,
          start: 'top bottom+=80px',
          ease: 'sine.out',
        },
      }
    );

    gsap.from(
      [
        aniMenuSubTitle2.current,
        aniMenuItemsLeft2.current,
        aniMenuItemsRight2.current,
      ],
      {
        opacity: 0,
        delay: 0.6,
        duration: 0.5,
        y: 100,
        stagger: { amount: 0.3 },
        scrollTrigger: {
          id: 'menu-items',
          trigger: aniMenuItemsLeft2.current,
          start: 'top bottom+=80px',
          ease: 'sine.out',
        },
      }
    );

    // Animate images
    gsap.from([aniPastaIMG.current, ...aniLeavesIMG.current], {
      duration: 1,
      opacity: 0,
      x: 200,
      stagger: 0.15,
      scrollTrigger: {
        id: 'pasta',
        trigger: aniPastaIMG.current,
        start: 'top center+=200px',
      },
    });

    gsap.from(aniTomatoIMG.current, {
      duration: 1,
      opacity: 0,
      x: -200,
      stagger: 0.15,
      scrollTrigger: {
        id: 'tomato',
        trigger: aniTomatoIMG.current,
        start: 'top center+=200px',
      },
    });

    gsap.from(aniForkIMG.current, {
      duration: 1,
      opacity: 0,
      x: 200,
      stagger: 0.15,
      scrollTrigger: {
        id: 'tomato',
        trigger: aniForkIMG.current,
        start: 'top center+=200px',
      },
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
