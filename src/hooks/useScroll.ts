import { useEffect, useCallback, useState } from 'react';

interface Fractions {
  numerator: number;
  denominator: number;
}

interface DarkMode {
  toggle: boolean;
  className: string;
}

export function useDarkMode({ numerator, denominator }: Fractions): DarkMode {
  const [toggle, setToggle] = useState(false);

  const toogleMode = useCallback(() => {
    const change = (window.innerHeight * numerator) / denominator;
    const scroll = window.pageYOffset;

    setToggle(scroll >= change);
  }, [denominator, numerator]);

  useEffect(() => {
    window.addEventListener('scroll', toogleMode);
    return () => {
      window.removeEventListener('scroll', toogleMode);
    };
  }, [toogleMode]);

  useEffect(() => {
    toogleMode();
  }, [toogleMode]);
  const className = toggle ? 'dark' : 'light';

  return { toggle, className };
}
