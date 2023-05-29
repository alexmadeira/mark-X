import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
  ReactNode,
} from 'react';

interface WindowContextData {
  width: number | null;
  height: number | null;
}
const WindowContext = createContext<WindowContextData>({} as WindowContextData);
interface Props {
  children: ReactNode;
}

const WindowProvider: React.FC = ({ children }: Props) => {
  const size = process.browser
    ? JSON.parse(localStorage.getItem('windowSize'))
    : { width: null, height: null };

  const [width, setWidth] = useState<number | null>(size);
  const [height, setHeight] = useState<number | null>(size);

  const changeSize = useCallback(() => {
    setWidth(window?.innerWidth);
    setHeight(window?.innerHeight);
  }, []);

  useEffect(() => {
    setWidth(window?.innerWidth);
    setHeight(window?.innerHeight);
  }, []);

  useEffect(() => {
    window?.addEventListener('resize', changeSize);
    return () => {
      window?.removeEventListener('resize', changeSize);
    };
  }, [changeSize]);

  return (
    <WindowContext.Provider
      value={{
        width,
        height,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

function useWindow(): WindowContextData {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error('useWindow must be used within an WindowProvider');
  }
  return context;
}

export { useWindow, WindowProvider };
