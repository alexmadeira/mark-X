import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import client from '~/lib/prismic';

import { A } from './styles';

interface ImageProject {
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
  banner: ImageProject;
  minibanner: ImageProject;
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
        {project.minibanner && (
          <Image
            src={project.minibanner.url}
            width={project.minibanner.dimensions.width}
            height={project.minibanner.dimensions.height}
            alt={`${project.name} Banner`}
          />
        )}
        <span>{project?.name}</span>
      </A>
    </Link>
  );
};

export default NavProject;
