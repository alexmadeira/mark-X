import { useCallback, useEffect, useState } from 'react';

import { useWindow } from '~/hooks/WindowContext';

interface Variants {
  animate: string;
  exit: string;
  initial: string;
}
interface variantTypes {
  name: string;
  width: number;
  height: number;
}

const variantList: variantTypes[] = [
  { name: '1310', width: 1310, height: 450 },
  { name: '780', width: 780, height: 450 },
  { name: '450', width: 450, height: 450 },
  { name: 'Mob', width: 0, height: 450 },
  { name: 'Mob850', width: 450, height: 0 },
];

export function useVariants(): Variants {
  const { width, height } = useWindow();

  const variant = useCallback(
    (): variantTypes =>
      variantList.find(
        variantType =>
          width >= variantType.width && height >= variantType.height,
      ),
    [height, width],
  );

  const [varinatSelect, setVarinatSelect] = useState(variant);

  useEffect(() => {
    setVarinatSelect(variant);
  }, [variant]);

  const animate = `animate${varinatSelect?.name}`;
  const exit = `exit${varinatSelect?.name}`;
  const initial = `initial${varinatSelect?.name}`;

  return {
    animate,
    exit,
    initial,
  };
}
