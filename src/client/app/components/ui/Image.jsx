import React from 'react';
import PropTypes from 'prop-types';

import Api from '../../helpers/Api';

const Image = (props) => (
  <img {...props} />
);

Image.defaultProps = {
  src: Api.defaultImage,
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
