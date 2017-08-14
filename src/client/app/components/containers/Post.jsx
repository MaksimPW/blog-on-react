import React, { PropTypes } from 'react';

import BlogItem from './../ui/BlogItem';

import request from 'superagent';
import _ from 'lodash';

import Api from '../../helpers/Api';

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
      Api.index,
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
      Api.addLike(this.props.match.params.id),
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
