import { useCallback, useEffect, useState } from 'react';

interface Window {
  width: number;
  height: number;
  loading: boolean;
}

export function useWindow(): Window | null {
  const [width, setWidth] = useState(-1);
  const [height, setHeight] = useState(-1);
  const [loading, setLoading] = useState(true);

  const changeSize = useCallback(() => {
    setWidth(window?.innerWidth);
    setHeight(window?.innerHeight);
  }, []);

  useEffect(() => {
    setWidth(window?.innerWidth);
    setHeight(window?.innerHeight);
  }, []);

  useEffect(() => {
    if (window?.innerWidth > 0) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    window?.addEventListener('resize', changeSize);
    return () => {
      window?.removeEventListener('resize', changeSize);
    };
  }, [changeSize]);

  return { width, height, loading };
}
