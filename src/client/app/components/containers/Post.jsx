import React, { PropTypes } from 'react';

import BlogItem from './../ui/BlogItem';

import request from 'superagent';
import _ from 'lodash';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3031',
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }

  render() {
    return (
      <div>
        {
          React.createElement(BlogItem,
            _.assign({}, this.state.posts[this.props.match.params.id]))
        }
      </div>
    );
  }
}

Post.propTypes = {
  match: PropTypes.object
};

export default Post;
