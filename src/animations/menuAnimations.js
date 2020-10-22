import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const menuAnimations = ({
  aniMenuTitle,
  aniMenuSubTitle,
  aniMenuItemsLeft,
  aniMenuItemsRight,
  aniMenuSubTitle2,
  aniMenuItemsLeft2,
  aniMenuItemsRight2,
}) => {
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
};
