import React, { PropTypes } from 'react';
import Link from './../elements/Link';
import { newPostsPath, contactsPath } from './../../helpers/routes/paths.js';

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
    <br />
    <Link to={contactsPath}>
      Contacts
    </Link>
    <br />
    <Link to={newPostsPath}>
      Create post
    </Link>
  </div>
);

const Footer = () => (
  <div>
    Powered by React.
  </div>
);

export default MainLayout;
