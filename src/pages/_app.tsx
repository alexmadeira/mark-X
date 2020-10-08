import { ThemeProvider } from 'styled-components';

import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';

import Footer from '~/components/Footer';
import Menu from '~/components/Menu';
import { BannerProvider } from '~/context/BannerContext';
import GlobalStyle from '~/styles/GlobalStyle';
import theme from '~/styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Menu />
      <Footer />
      <BannerProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </BannerProvider>
    </ThemeProvider>
  );
};

export default MyApp;
