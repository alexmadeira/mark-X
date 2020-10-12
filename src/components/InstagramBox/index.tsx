/* eslint-disable camelcase */
import React from 'react';

import { useFetch } from '~/hooks/useFetch';

import { Container, Thumb } from './styles';

interface InstagramBoxProps {
  userName: string;
}
interface Media {
  node: {
    id: string;
    display_url: string;
    thumbnail_src: string;
  };
}

interface InstagraProps {
  graphql: {
    user: {
      biography: string;
      edge_owner_to_timeline_media: {
        edges: Media[];
      };
    };
  };
}

const InstagramBox: React.FC<InstagramBoxProps> = ({ userName }) => {
  const { data } = useFetch<InstagraProps>(userName);
  if (!data) return null;

  const { user } = data.graphql;
  const { edges } = user.edge_owner_to_timeline_media;

  return (
    <Container>
      {edges.map((media, index) => {
        if (index > 5) {
          return null;
        }
        return (
          <Thumb key={media.node.id} src={media.node.display_url} alt="" />
        );
      })}
    </Container>
  );
};

export default InstagramBox;
