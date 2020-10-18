import { Variants } from 'framer-motion';

export const variantesBanner: Variants = {
  initialDesk: {
    x: '-40vw',
  },
  animateDesk: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  exitDesk: {
    x: '-40vw',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  initialMob: {
    y: '-40vw',
  },
  animateMob: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  exitMob: {
    y: '-40vw',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};
export const FadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'linear',
    },
  },
};
