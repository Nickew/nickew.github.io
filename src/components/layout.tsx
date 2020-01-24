import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import theme from '../styles/theme';
import Links from './links';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './footer';
import Container from './container';

const Layout = ({
  children,
  location,
}: {
  children: React.ReactNode;
  location: any;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>n1ghtdev | Front End Developer</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nickew.design/" />
        <meta property="og:image" content="https://i.imgur.com/KhVoogP.png" />
        <meta property="og:image:width" content="590" />
        <meta property="og:image:height" content="440" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          href="https://i.imgur.com/ZZbWYlp.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#007050" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <Links />

      <Container>
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
