import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const aboutAnimation = ({ aniAbout }) => {
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
};
