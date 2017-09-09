import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

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
        <Helmet title={post.title} >
          <meta name="keywords" content="пост блог" />
          <meta name="description" content="Пост в проекте blog-on-react" />
        </Helmet>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
  isFetching: PropTypes.bool,
};

Post.defaultProps = {
  post: {}
};

export default Post;
