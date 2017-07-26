import React, { PropTypes } from 'react';

import BlogItem from './../ui/BlogItem';

import request from 'superagent';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] } 
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
          _.assign({}, this.state.posts[this.props.match.params.id],
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
