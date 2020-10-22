import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const aboutAnimation = ({ aniAbout }) => {
  gsap.from(aniAbout.current, {
    duration: .5,
    y: 210,
    stagger: { amount: 0.2 },
    scrollTrigger: {
      trigger: '.about',
      id: 'about',
      start: 'top bottom-=150px',
      ease: 'sine.out',
    },
  });
};
