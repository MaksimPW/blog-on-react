import React from 'react';
import PropTypes from 'prop-types';

const TextBox = (props) => (
  <span>{props.children}</span>
);

TextBox.defaultProps = {
  children: 'default text',
};

TextBox.propTypes = {
  children: PropTypes.string
};

export default TextBox;
