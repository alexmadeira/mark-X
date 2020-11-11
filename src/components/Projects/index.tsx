import React, { memo } from 'react';

import { useProjectList } from '~/hooks/ProjectListContext';
import { useDarkMode } from '~/hooks/useScroll';

import Project from './Project';
import {
  Container,
  SquaresMenu,
  SquaresTop,
  SquaresMiddle,
  SquaresBottom,
  ProjectsList,
} from './styles';

const Projects: React.FC = () => {
  const { toggleList, open, projects } = useProjectList();

  const { className } = useDarkMode({ numerator: 1, denominator: 9 });
  return (
    <Container>
      <SquaresMenu
        className={open && 'open'}
        onClick={() => {
          toggleList();
        }}
      >
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

export default memo(Projects);
