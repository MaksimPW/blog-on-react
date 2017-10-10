/* globals __TEST__ */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let StandartLink = {};
if (__TEST__ == true) {
  const TestLink = ({to, children}) => (
    <a href={to}>{children}</a>
  );

  TestLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
  };

  StandartLink = TestLink;
} else {
  StandartLink = Link;
}

export default StandartLink;
