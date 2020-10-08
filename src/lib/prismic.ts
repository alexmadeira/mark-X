import Prismic from 'prismic-javascript';
import { DefaultClient } from 'prismic-javascript/types/client';

const apiEndPoint = 'https://mark-x.cdn.prismic.io/api/v2';

const client = (req = null): DefaultClient => {
  const options = req ? { req } : null;
  return Prismic.client(apiEndPoint, options);
};

export default client;
