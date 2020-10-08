import Prismic from 'prismic-javascript';
import React, {
  useEffect,
  createContext,
  useCallback,
  useState,
  useMemo,
  useContext,
} from 'react';
import client from '~/lib/prismic';

interface Image {
  alt: string | null;
  copyright: string | null;
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
}

interface Project {
  slug: string;
  name: string;
  banner: Image;
}

interface BannerContextData {
  active: number;
  total: number;
  projects: Project[];
  set(index: number): void;
  next(): void;
  prev(): void;
}

const BannerContext = createContext<BannerContextData>({} as BannerContextData);

const BannerProvider: React.FC = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const getProjects = async () => {
      const { results } = await client().query([
        Prismic.Predicates.at('document.type', 'project'),
      ]);
      const projectData: Project[] = results.map(result => ({
        ...result.data,
        name: result.data.name[0].text,
        slug: result.uid,
      }));

      setProjects(projectData);
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

function useBanner(): BannerContextData {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error('useBanner must be used within an BannerProvider');
  }
  return context;
}

export { useBanner, BannerProvider };
