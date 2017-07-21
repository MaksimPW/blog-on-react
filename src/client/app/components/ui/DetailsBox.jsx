import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const DetailsBox = (props) => (
  <div className="details_box">
    <b><p>Author: {props.author}</p></b>
    <p>createdAt: {props.createdAt}</p>
    <p>updatedAt: {props.updatedAt}</p>
  </div>
);

DetailsBox.defaultProps = {
  author: 'Admin',
  createdAt: moment('19700101', 'YYYYMMDD').fromNow(),
  updatedAt: moment('20170420', 'YYYYMMDD').fromNow()
};

DetailsBox.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};

export default DetailsBox;
