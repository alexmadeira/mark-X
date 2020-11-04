import React, { useEffect, useState } from 'react';

import Prismic from 'prismic-javascript';

import { useDarkMode } from '~/hooks/useScroll';
import client from '~/lib/prismic';

import Project from './Project';
import {
  Container,
  SquaresMenu,
  SquaresTop,
  SquaresMiddle,
  SquaresBottom,
  ProjectsList,
} from './styles';

interface Image {
  alt: string | null;
  copyright: string | null;
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
}
interface ProjectProps {
  slug: string;
  id: string;
  name: string;
  preview: string;
  logo: Image;
}
const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [open, setOpen] = useState(false);

  const { className } = useDarkMode({ numerator: 14, denominator: 15 });

  useEffect(() => {
    const getProjects = async () => {
      const { results } = await client().query([
        Prismic.Predicates.at('document.type', 'project'),
        Prismic.Predicates.at('my.project.spotlight', true),
      ]);

      const projectData: ProjectProps[] = results.map(result => ({
        ...result.data,
        name: result.data.name[0].text,
        shortdescription: result.data.shortdescription[0].text,
        slug: result.uid,
        id: result.id,
      }));

      setProjects(projectData);
    };
    getProjects();
  }, []);

  const toggleProjects = () => {
    setOpen(!open);
  };

  return (
    <Container
      onClick={() => {
        toggleProjects();
      }}
    >
      <SquaresMenu className={open && 'open'}>
        <SquaresTop className={className} />
        <SquaresMiddle className={className} />
        <SquaresBottom className={className} />
      </SquaresMenu>
      <ProjectsList className={open && 'open'}>
        {projects?.map(({ id, slug, logo, name }) => (
          <Project key={id} id={id} name={name} slug={slug} logo={logo} />
        ))}
      </ProjectsList>
    </Container>
  );
};

export default Projects;
