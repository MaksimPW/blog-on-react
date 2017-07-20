import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => (
  <img {...props} />
);


Image.defaultProps = {
  src: 'http://maksim.pw/wp-content/uploads/2016/09/05OB6lDjCQvsXlwMc-C_T_qMMU3qjtEZ3Uz18-9f3kiewcVM-508x381.jpg',
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
