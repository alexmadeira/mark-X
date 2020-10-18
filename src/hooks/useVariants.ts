import { useCallback, useEffect, useState } from 'react';

import { useWindow } from '~/hooks/useWindow';

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
  { name: 'Desk', width: 780, height: 450 },
  { name: 'Mob', width: 0, height: 0 },
];

export function useVariants(): Variants {
  const [varinatSelect, setVarinatSelect] = useState({} as variantTypes);

  const { width, height, loading } = useWindow();

  const variant = useCallback(
    (): variantTypes =>
      variantList.find(
        variantType =>
          width >= variantType.width && height >= variantType.height,
      ),
    [height, width],
  );

  useEffect(() => {
    if (!loading) {
      setVarinatSelect(variant);
    }
  }, [loading, variant]);

  const animate = `animate${varinatSelect.name}`;
  const exit = `exit${varinatSelect.name}`;
  const initial = `initial${varinatSelect.name}`;

  return {
    animate,
    exit,
    initial,
  };
}
