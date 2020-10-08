import Prismic from 'prismic-javascript';
import React, {
  useEffect,
  createContext,
  useCallback,
  useState,
  useMemo,
} from 'react';
import { Document } from 'prismic-javascript/types/documents';
import client from '~/lib/prismic';

interface BannerContextData {
  active: number;
  total: number;
  projects: Document[];
  set(index: number): void;
  next(): void;
  prev(): void;
}

const BannerContext = createContext<BannerContextData>({} as BannerContextData);

const BannerProvider: React.FC<BannerContextData> = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const getProjects = async () => {
      const { results } = await client().query([
        Prismic.Predicates.at('document.type', 'project'),
      ]);
      setProjects(results);
    };
    getProjects();
  }, []);

  const total = useMemo(() => {
    return projects.length;
  }, [projects]);

  const set = useCallback(index => {
    setActive(index);
  }, []);

  const next = useCallback(() => {
    const nextBanner = active + 1 > total - 1 ? 0 : active + 1;
    set(nextBanner);
  }, [active, set, total]);

  const prev = useCallback(() => {
    const prevBanner = active - 1 < 0 ? total - 1 : active - 1;
    set(prevBanner);
  }, [active, set, total]);

  return (
    <BannerContext.Provider
      value={{ active, total, projects, set, next, prev }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export { BannerContext, BannerProvider };
