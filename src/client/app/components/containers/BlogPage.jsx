import React, { PropTypes } from 'react';

import BlogList from '../ui/BlogList';
import ChartContainer from './../../containers/ChartContainer';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isFetching, posts } = this.props;
    return (
      !isFetching && this.renderPosts(posts)
    );
  }

  renderPosts(posts) {
    return (
      <div>
        <BlogList posts={posts} />
        <ChartContainer />
      </div>
    );
  }
}

BlogPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool
};
