import React from 'react';
import BlogList from '../ui/BlogList';
import Chart from '../ui/Chart';
import TextBox from '../ui/TextBox';
import Like from '../ui/Like';

export default class BlogPage extends React.Component {
  constructor(props){
    super(props);

    this.state = { posts: props.posts };
    this.likeAdd = this.likeAdd.bind(this);
  }

  likeAdd(postId) {
    let updatedPosts = Object.assign({}, this.state.posts);
    if (updatedPosts[postId].length != 0) {
      if (updatedPosts[postId]['likes'] == null){
        updatedPosts[postId]['likes'] = 0;
      }
      updatedPosts[postId]['likes']++;
      this.setState(updatedPosts);
    }
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
