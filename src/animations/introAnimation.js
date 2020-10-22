import gsap from 'gsap';

const introTL = gsap.timeline();

export const introAnimation = ({
  aniIntroText,
  aniIntroLayer,
  aniBannerText,
}) => {
  // Enable visibility
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
};
