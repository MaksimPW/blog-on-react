import React, { PropTypes } from 'react';

import BlogItem from './../ui/BlogItem';

import _ from 'lodash';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post, isFetching, likeAdd } = this.props;
    return (
      !isFetching && post && this.renderPost(post, likeAdd)
    );
  }

  renderPost(post, likeAdd) {
    return (
      <div>
        {
          React.createElement(BlogItem,
            _.assign({}, post,
              {
                likeAdd: () => likeAdd(post.id)
              }
            )
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
  likeAdd: PropTypes.func.isRequired
};

Post.defaultProps = {
  post: {}
};

export default Post;
