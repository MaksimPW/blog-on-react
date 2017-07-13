import React from 'react';
import update from 'immutability-helper';

import BlogList from '../ui/BlogList';
import Chart from '../ui/Chart';
import TextBox from '../ui/TextBox';
import Like from '../ui/Like';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: props.posts };
    this.likeAdd = this.likeAdd.bind(this);
  }

  likeAdd(postId) {
	  const currentPost = this.state.posts[postId];
    let updatedPost = {};

    if (currentPost['likes'] == null) {
      updatedPost = update(currentPost, { likes: {$set: 1 }});
    } else {
      updatedPost = update(currentPost, { likes: {$set: (currentPost.likes + 1) }});
    }

    this.setState({
	    posts: this.state.posts
      .slice(0, postId)
      .concat(updatedPost)
		  .concat(this.state.posts.slice(postId +1))
	  });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <BlogList posts={posts} likeAdd={this.likeAdd} />
	 <Chart columns={posts.map((post)=>[
            post.text || TextBox.defaultProps.children,
            post.likes || Like.defaultProps.count ])
                     } />
      </div>
    )
  }
}
