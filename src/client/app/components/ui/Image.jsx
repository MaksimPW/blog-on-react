import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => (
  <img {...props} />
);


Image.defaultProps = {
  src: 'http://localhost:3031/assets/2.jpg',
  alt: 'default alt',
  width: '200px',
  height: '200px'
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Image;
