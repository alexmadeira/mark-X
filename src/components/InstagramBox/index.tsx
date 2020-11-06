/* eslint-disable camelcase */
import React from 'react';

import { useFetch } from '~/hooks/useFetch';
import useShimmer from '~/hooks/useShimmer';

import { Container, Thumb } from './styles';

interface InstagramBoxProps {
  userName: string;
  limit?: number;
}
interface Media {
  node: {
    id: string;
    display_url: string;
    dimensions: {
      height: number;
      width: number;
    };
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

const InstagramBox: React.FC<InstagramBoxProps> = ({ userName, limit = 5 }) => {
  const { Image: ShimmerImage } = useShimmer();
  const { data } = useFetch<InstagraProps>(userName);
  if (!data) return null;

  const { user } = data.graphql;
  const { edges } = user.edge_owner_to_timeline_media;

  return (
    <Container>
      {edges.map((media, index) => {
        if (index > limit) return null;

        return (
          <ShimmerImage key={media.node.id} flex>
            <Thumb
              src={media.node.display_url}
              alt=""
              width={media.node.dimensions.height}
              height={media.node.dimensions.height}
              onLoad={e =>
                (e.target as HTMLTextAreaElement).classList.add('loaded')
              }
            />
          </ShimmerImage>
        );
      })}
    </Container>
  );
};

export default InstagramBox;
