import React from 'react';
import PropTypes from 'prop-types';

const _ = require('lodash');
import BlogItem from './BlogItem';


const BlogList = ({ posts, likeAdd }) => (
  <div className="blog_list">
    {
      _.map(
        posts,
        (post) => (
          React.createElement(BlogItem,
            _.assign({}, post,
              { key: post.id, likeAdd: () => likeAdd(post.id) }))
        )
      )
    }
  </div>
);


BlogList.propTypes = {
  posts:  PropTypes.arrayOf(PropTypes.object),
  likeAdd: PropTypes.func.isRequired
};

export default BlogList;
