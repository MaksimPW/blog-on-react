import React, { PropTypes } from 'react';
import Link from './../elements/Link';

import history from './../../helpers/history';

// TODO: import css for Logo, Footer

const MainLayout = ({ children }) => (
  <div>
    <Logo />
    <GoBackButton />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const GoBackButton = () => (
  <div>
    <a href='#' onClick={() => history.goBack()}>Назад</a>
  </div>
);

const Logo = () => (
  <div>
    <Link to='/'>
      Blog
    </Link>
  </div>
);

const Footer = () => (
  <div>
    Powered by React.
  </div>
);

export default MainLayout;
