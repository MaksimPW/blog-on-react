import React, { PropTypes } from 'react';

import BlogItem from './../ui/BlogItem';

import _ from 'lodash';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post, isFetching } = this.props;
    return (
      !isFetching && post && this.renderPost(post)
    );
  }

  renderPost(post) {
    return (
      <div>
        {
          React.createElement(BlogItem,
            _.assign({}, post)
          )
        }
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
  isFetching: PropTypes.bool,
  match: PropTypes.object,
};

Post.defaultProps = {
  post: {}
};

export default Post;
