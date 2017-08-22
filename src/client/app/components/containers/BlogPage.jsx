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
    const { posts, likeAdd } = this.props;

    return (
      <div>
        <BlogList posts={posts} likeAdd={likeAdd}/>
        <ChartContainer />
      </div>
    );
  }
}

BlogPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  likeAdd: PropTypes.func.isRequired,
  isFetching: PropTypes.bool
};
