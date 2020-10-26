import { Variants } from 'framer-motion';

import desk1310 from './_desk1310';
import desk780 from './_desk780';
import mob from './_mob';
import mob450 from './_mob450';

export const variantesBanner: Variants = {
  ...desk1310,
  ...desk780,
  ...mob450,
  ...mob,
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
