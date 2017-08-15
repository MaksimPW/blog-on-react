import React, { PropTypes } from 'react';

import BlogList from '../ui/BlogList';
import Chart from '../ui/Chart';
import TextBox from '../ui/TextBox';
import Like from '../ui/Like';

import request from 'superagent';
import Api from '../../helpers/Api';

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
      Api.index,
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }

  likeAdd(postId) {
    request.patch(
      Api.addLike(postId),
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
