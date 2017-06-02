const BlogList = ( { posts } ) => (
  DOM.div(
    { },
    _.map(
      posts,
      (post) => (
        React.createElement(BlogItem, { text: post.text, image: post.image, key: post.id })
      )
    )
  )
)
