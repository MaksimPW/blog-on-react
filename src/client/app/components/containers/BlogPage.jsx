import React, { PropTypes } from 'react';

import BlogList from '../ui/BlogList';
import Chart from '../ui/Chart';
import TextBox from '../ui/TextBox';
import Like from '../ui/Like';

import request from 'superagent';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
    this.likeAdd = this.likeAdd.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3000/posts',
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }

  likeAdd(postId) {
    request.patch(
      'http://localhost:3000/posts/'.concat(postId, '/add_like'),
      {},
      () => this.fetchPosts()
    );
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <BlogList posts={posts} likeAdd={this.likeAdd} />
        <Chart columns={posts.map((post) => [
          post.title || TextBox.defaultProps.children,
          post.likes || Like.defaultProps.count ])
        } />
      </div>
    );
  }
}

BlogPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};
