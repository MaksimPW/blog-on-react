const BlogList = ( { posts } ) => (
  DOM.div(
    { },
    _.map(
      posts,
      (post) => (
        React.createElement(BlogItem, { text: post.text, details: post.details, image: post.image, key: post.id })
      )
    )
  )
)


BlogList.propTypes = {
  posts:  PropTypes.arrayOf(PropTypes.object)
}
