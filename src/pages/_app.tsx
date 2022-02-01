import { ThemeProvider } from 'styled-components';
import NextNProgress from 'nextjs-progressbar';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import Footer from '../components/Footer';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Header />;
      <Component {...pageProps} />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
