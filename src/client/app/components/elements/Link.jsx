import React from 'react';
import { Link } from 'react-router-dom';

let StandartLink = {};
if (global.__TEST__ == true) {
  const TestLink = ({to, children}) => (
    <a href={to}>{children}</a>
  );
  StandartLink = TestLink;
} else {
  StandartLink = Link;
}

export default StandartLink;
