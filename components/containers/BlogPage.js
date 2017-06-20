class BlogPage extends React.Component {
  constructor(props){
    super(props);

    this.state = { posts };
    this.likeAdd = this.likeAdd.bind(this);
  }

  likeAdd(postId) {
    this.state.posts.map((post)=> {
      if (postId == post.id) {
        if (post.likes == null) {
          post.likes = 0;
        }
        post.likes++;
        return post;
      }
    });

    this.setState({posts: posts})
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
