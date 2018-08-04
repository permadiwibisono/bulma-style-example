import React from 'react';
import Helmet from 'react-helmet';

import Site from './layout/Site';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Router from './layout/Router';

const Layout = () => (
  <Site>
    <Helmet
      title="Awesome Bulma + React"
      meta={[
        { name: 'description', content: 'Permadi Wibisono\'s personal wedsite, portfolio, blog, tutorials, and just cool $h!t' },
        { name: 'keywords', content: 'resume, blog, porfolio, tutorials, permadi wibisono' },
      ]}
      script={[
        { src: 'https://use.fontawesome.com/releases/v5.0.4/js/all.js' },
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      ]}
    />
    <Header />
    <Content id="content">
      <Router />
    </Content>
    <Footer />
  </Site>
);

export default Layout;
