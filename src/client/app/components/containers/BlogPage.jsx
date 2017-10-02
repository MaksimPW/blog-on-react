import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

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
        <Helmet title='Список постов' >
          <meta
            name="keywords"
            content="главная страница блог"
          />
          <meta
            name="description"
            content="Главная страница в проекте blog-on-react"
          />
        </Helmet>
      </div>
    );
  }
}

BlogPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool
};
