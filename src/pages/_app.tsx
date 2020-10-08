import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from '~/styles/GlobalStyle';
import theme from '~/styles/theme';
import Menu from '~/components/Menu';
import Footer from '~/components/Footer';
import { BannerProvider } from '~/context/BannerContext';

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
