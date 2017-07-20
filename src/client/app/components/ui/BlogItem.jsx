import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import DetailsBox from './DetailsBox';
import TextBox from './TextBox';
import Like from './Like';

const BlogItem = ({ image, details, text, likes, likeAdd }) => (
  <div className="blog_item">
    <Image {...image} />
    <div className="container">
      <DetailsBox {...details} />
      <TextBox>{text}</TextBox>
      <Like count={likes} likeAdd={likeAdd} />
    </div>
  </div>
);

BlogItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.object,
  details: PropTypes.object,
  text: PropTypes.string,
  likes: PropTypes.number,
  likeAdd: PropTypes.func.isRequired
};

export default BlogItem;
