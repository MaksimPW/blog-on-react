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
  }

  render() {
    const { isFetching } = this.props;

    return(
      !isFetching && this.renderPosts()
    );
  }

  renderPosts() {
    const { posts } = this.props;

    return (
      <div>
        <BlogList posts={posts} />
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
