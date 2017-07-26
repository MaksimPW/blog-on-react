import React, { PropTypes } from 'react';
import Link from './../elements/Link';
// TODO: import css for Logo, Footer

const MainLayout = ({ children }) => (
  <div>
    <Logo />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

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
