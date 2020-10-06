import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from '~/styles/GlobalStyle';
import theme from '~/styles/theme';
import Menu from '~/components/Menu';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence>
        <Menu />
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
