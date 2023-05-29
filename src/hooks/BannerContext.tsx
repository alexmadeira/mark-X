import React, {
  useEffect,
  createContext,
  useCallback,
  useState,
  useRef,
  useContext,
  ReactNode,
} from 'react';

import Prismic from 'prismic-javascript';

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
  id: string;
  name: string;
  banner: Image;
  logo: Image;
  type: string;
  shortdescription: string;
  description: string;
}

interface BannerContextData {
  active: number;
  total: number;
  percent: number;
  projects: Project[];

  set(): void;
  next(): void;
  prev(): void;
  pause(): void;
  start(): void;
  setShowProject(): void;
  inBanner(): boolean;
  setById(): void;
}

interface Props {
  children: ReactNode;
}
const BannerContext = createContext<BannerContextData>({} as BannerContextData);

const BannerProvider: React.FC = ({ children }: Props) => {
  const timeOutDelay = 100;
  const timeOut = useRef(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const active = useRef(0);
  const total = useRef(0);
  const [showProject, setShowProject] = useState<null | string>(null);
  const [percent, setPercent] = useState(0);

  const set = useCallback((index: number) => {
    active.current = index;
    clearTimeout(timeOut.current);
    addPercent(-10);
    clock();
  }, []);

  const setById = useCallback(
    (projectId: string) => {
      const index = projects.findIndex(project => project.id === projectId);
      if (index > -1) {
        set(index);
      }
    },
    [projects, set],
  );

  const inBanner = useCallback(() => {
    if (!showProject) return false;

    const index = projects.findIndex(project => project.id === showProject);
    if (index > -1) {
      return true;
    }
    return false;
  }, [showProject]);

  const next = useCallback(() => {
    const nextBanner =
      active.current + 1 === total.current ? 0 : active.current + 1;
    set(nextBanner);
  }, [active, total, set]);

  const prev = useCallback(() => {
    const prevBanner =
      active.current - 1 < 0 ? total.current - 1 : active.current - 1;
    set(prevBanner);
  }, [active, set, total]);

  const pause = useCallback(() => {
    clearTimeout(timeOut.current);
  }, []);

  const start = useCallback(() => {
    clearTimeout(timeOut.current);
    clock();
  }, []);

  const addPercent = useCallback(
    (newPercent: number | boolean = false) => {
      if (newPercent !== false) {
        setPercent(Number(newPercent));
      }

      setPercent(prevState => {
        if (prevState + 1 > 100) {
          next();
        }
        return prevState + 1;
      });
    },
    [next],
  );

  const addTimer = useCallback(() => {
    addPercent();
  }, [addPercent]);

  const clock = useCallback(() => {
    addTimer();
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      clock();
    }, timeOutDelay);
  }, [addTimer]);

  useEffect(() => {
    const getProjects = async () => {
      const { results } = await client().query([
        Prismic.Predicates.at('document.type', 'project'),
        Prismic.Predicates.at('my.project.spotlight', true),
      ]);

      const projectData: Project[] = results.map(result => ({
        ...result.data,
        name: result.data.name[0].text,
        shortdescription: result.data.shortdescription[0].text,
        slug: result.uid,
        id: result.id,
      }));
      total.current = projectData.length;
      setProjects(projectData);
    };
    getProjects();
  }, []);

  useEffect(() => {
    start();
  }, [start]);

  return (
    <BannerContext.Provider
      value={{
        active: active.current,
        total: total.current,
        projects,
        percent,
        setShowProject,
        setById,
        inBanner,
        set,
        next,
        prev,
        pause,
        start,
      }}
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
