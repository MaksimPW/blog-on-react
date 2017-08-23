import React, { PropTypes } from 'react';

import BlogList from '../ui/BlogList';
import ChartContainer from './../../containers/ChartContainer';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isFetching } = this.props;
    return (
      !isFetching && this.renderPosts()
    );
  }

  renderPosts() {
    const { posts } = this.props;

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
