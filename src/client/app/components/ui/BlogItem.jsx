import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import DetailsBox from './DetailsBox';
import TextBox from './TextBox';
import Link from './../elements/Link';

import LikeContainer from './../../containers/LikeContainer';

import { postsPath } from './../../helpers/routes/paths';

const BlogItem = ({ id, image, details, title, likes, likeAdd }) => (
  <div className="blog_item">
    <Link to={postsPath(id)}>
      <Image {...image} />
    </Link>
    <div className="container">
      <DetailsBox {...details} />
      <TextBox>{title}</TextBox>
      <LikeContainer count={likes} postId={id} likeAdd={likeAdd} />
    </div>
  </div>
);

BlogItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.object,
  details: PropTypes.object,
  title: PropTypes.string,
  likes: PropTypes.number,
};

export default BlogItem;
