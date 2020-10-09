import { ThemeProvider } from 'styled-components';

import React from 'react';

import { AppProps } from 'next/app';

import Footer from '~/components/Footer';
import Menu from '~/components/Menu';
import { BannerProvider } from '~/hooks/BannerContext';
import GlobalStyle from '~/styles/GlobalStyle';
import theme from '~/styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Menu />
      <Footer />
      <BannerProvider>
        <Component {...pageProps} />
      </BannerProvider>
    </ThemeProvider>
  );
};

export default MyApp;
