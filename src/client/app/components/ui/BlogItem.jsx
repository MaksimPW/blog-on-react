import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import DetailsBox from './DetailsBox';
import TextBox from './TextBox';
import Link from './../elements/Link';

import LikeContainer from './../../containers/LikeContainer';

import { postsPath, editPostsPath } from './../../helpers/routes/paths';

const BlogItem = ({ id, image, details, title }) => (
  <div className="blog_item">
    <Link to={postsPath(id)}>
      <Image {...image} />
    </Link>
    <div className="container">
      <DetailsBox {...details} />
      <TextBox>{title}</TextBox>
      <Link to={editPostsPath(id)}>
        Edit
      </Link>
      <LikeContainer postId={id} />
    </div>
  </div>
);

BlogItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.object,
  details: PropTypes.object,
  title: PropTypes.string
};

export default BlogItem;
