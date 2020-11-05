import React, { useState, createContext, useContext, useEffect } from 'react';

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
  logo: Image;
}

interface ProjectListContextData {
  open: boolean;
  projects: Project[];
  toggleList(): void;
  closeList(): void;
  openList(): void;
}

const ProjectListContext = createContext<ProjectListContextData>(
  {} as ProjectListContextData,
);

const ProjectListProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const toggleList = () => {
    setOpen(!open);
  };
  const closeList = () => {
    setOpen(false);
  };
  const openList = () => {
    setOpen(true);
  };

  useEffect(() => {
    const getProjects = async () => {
      const { results } = await client().query([
        Prismic.Predicates.at('document.type', 'project'),
      ]);

      const projectData: Project[] = results.map(result => ({
        ...result.data,
        name: result.data.name[0].text,
        slug: result.uid,
        id: result.id,
      }));

      setProjects(projectData);
    };
    getProjects();
  }, []);

  return (
    <ProjectListContext.Provider
      value={{ open, toggleList, projects, closeList, openList }}
    >
      {children}
    </ProjectListContext.Provider>
  );
};

function useProjectList(): ProjectListContextData {
  const context = useContext(ProjectListContext);
  if (!context) {
    throw new Error(
      'useProjectList must be used within an ProjectListProvider',
    );
  }
  return context;
}

export { useProjectList, ProjectListProvider };
