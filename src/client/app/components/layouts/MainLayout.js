import React, { PropTypes } from 'react';

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
    <div>Blog</div>
  </div>
);

const Footer = () => (
  <div>
    Powered by React.
  </div>
);

export default MainLayout;
