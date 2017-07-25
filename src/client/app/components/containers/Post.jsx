import React, { PropTypes } from 'react';

import BlogItem from './../ui/BlogItem';

import { posts } from './../../constants/static/posts';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: posts } 
  }

  render() {
    return (
      <div>
      {
        React.createElement(BlogItem,
          _.assign({}, this.state.posts[this.props.match.params.id - 1],
            { key: this.props.match.params.id, likeAdd: () => likeAdd(0) }))
      }
      </div>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
