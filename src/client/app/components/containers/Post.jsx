import React, { PropTypes } from 'react';

import BlogItem from './../ui/BlogItem';

import request from 'superagent';
import _ from 'lodash';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {} };
    this.likeAdd = this.likeAdd.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3000/posts',
      {},
      (err, res) => {
        const paramsId = this.props.match.params.id;
        const upPost = res.body.find(post => post.id == paramsId);
        this.setState({ post: upPost });
      }
    );
  }

  likeAdd() {
    request.patch(
      'http://localhost:3000/posts/'
        .concat(this.props.match.params.id, '/add_like'),
      {},
      () => this.fetchPosts()
    );
  }

  render() {
    return (
      <div>
        {
          React.createElement(BlogItem,
            _.assign({}, this.state.post,
              { likeAdd: this.likeAdd }
            ))
        }
      </div>
    );
  }
}

Post.propTypes = {
  match: PropTypes.object
};

export default Post;
