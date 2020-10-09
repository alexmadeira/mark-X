import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import client from '~/lib/prismic';

import { A } from './styles';

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

interface NavProjectProps {
  slug: string;
}

const NavProject: React.FC<NavProjectProps> = ({ slug }) => {
  const [project, setProject] = useState<Project>({} as Project);

  useEffect(() => {
    const getProject = async () => {
      const result = await client().getByUID('project', slug, {
        lang: 'pt-br',
      });

      const projectData: Project = {
        ...result.data,
        name: result.data.name[0].text,
        slug: result.uid,
      };
      setProject(projectData);
    };
    getProject();
  }, [slug]);

  return (
    <Link href={`/projeto/${project?.slug}`}>
      <A>
        <img src={project.banner?.url} alt={`${project?.name} Banner`} />
        {project.name}
      </A>
    </Link>
  );
};

export default NavProject;
