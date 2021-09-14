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
          <Project
            key={id}
            id={id}
            name={name}
            path={`/projeto/${slug}`}
            logo={logo}
          />
        ))}
        {/* <Project
          key="asd"
          id="sss"
          name="teste"
          path="/css-art/teste"
          logo={{
            alt: null,
            copyright: null,
            dimensions: {
              width: 200,
              height: 200,
            },
            url:
              'https://images.prismic.io/mark-x/11798333-78c0-4256-b2f6-91ca22abf329_nerd-universe-logo.png',
          }}
        /> */}
      </ProjectsList>
    </Container>
  );
};

export default memo(Projects);
