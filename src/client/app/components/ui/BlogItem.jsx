import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import DetailsBox from './DetailsBox';
import TextBox from './TextBox';
import Like from './Like';
import Link from './../elements/Link';
import { postsPath } from './../../routes/paths';

const BlogItem = ({ id, image, details, text, likes, likeAdd }) => (
  <div className="blog_item">
    <Link to={postsPath(id)}>
      <Image {...image} />
    </Link>
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
