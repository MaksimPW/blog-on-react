import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import DetailsBox from './DetailsBox';
import TextBox from './TextBox';
import Like from './Like';

const BlogItem = ({ id, image, details, text, likes, likeAdd }) => (
  <div>
	<Image {...image} />
	<DetailsBox {...details} />
	<TextBox>{text}</TextBox>
	<Like count={likes} likeAdd={likeAdd} />
  </div> 
)

BlogItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.object,
  details: PropTypes.object,
  text: PropTypes.string,
  likes: PropTypes.number,
  likeAdd: PropTypes.func.isRequired
}

export default BlogItem;
