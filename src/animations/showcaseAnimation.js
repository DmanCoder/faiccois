import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const showcaseAnimation = ({ aniShowCase }) => {
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
};
