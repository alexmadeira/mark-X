import { Variants } from 'framer-motion';

export const variantesBanner: Variants = {
  initial: {
    x: '-40vw',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  exit: {
    x: '-40vw',
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
