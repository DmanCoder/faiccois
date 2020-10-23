import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const menuImagesAnimation = ({
  aniPastaIMG,
  aniLeavesIMG,
  aniTomatoIMG,
  aniForkIMG,
}) => {
  // Animate images
  gsap.from([aniPastaIMG.current, ...aniLeavesIMG.current], {
    duration: 1.5,
    opacity: 0,
    x: 200,
    stagger: 0.15,
    rotation: 90,
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
};
