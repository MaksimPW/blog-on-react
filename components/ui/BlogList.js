const BlogList = ( { posts, likeAdd } ) => (
  DOM.div(
    { },
    _.map(
      posts,
      (post) => (
        React.createElement(BlogItem, _.assign({}, post, { key: post.id, likeAdd: () => likeAdd(post.id) }))
      )
    )
  )
)

BlogList.propTypes = {
  posts:  PropTypes.arrayOf(PropTypes.object),
  likeAdd: PropTypes.func.isRequired
}
