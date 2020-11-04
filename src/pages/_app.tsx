import { ThemeProvider } from 'styled-components';

import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';

import Footer from '~/components/Footer';
import Menu from '~/components/Menu';
import Projects from '~/components/Projects';
import { BannerProvider } from '~/hooks/BannerContext';
import { WindowProvider } from '~/hooks/WindowContext';
import GlobalStyle from '~/styles/GlobalStyle';
import theme from '~/styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  if (process.browser) {
    const size = { width: window.innerWidth, height: window.innerHeight };
    localStorage.setItem('windowSize', JSON.stringify(size));
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WindowProvider>
        <Menu />
        <Projects />
        <Footer />
        <BannerProvider>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </BannerProvider>
      </WindowProvider>
    </ThemeProvider>
  );
};

export default MyApp;
