import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let StandartLink = {};
if (global.__TEST__ == true) { // eslint-disable-line
  const TestLink = ({to, children}) => (
    <a href={to}>{children}</a>
  );

  TestLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.string
  };

  StandartLink = TestLink;
} else {
  StandartLink = Link;
}

export default StandartLink;
