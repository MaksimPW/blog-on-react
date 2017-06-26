const BlogItem = ({ id, image, details, text, likes, likeAdd }) => (
  DOM.div(
    { },
    React.createElement(Image, image),
    React.createElement(DetailsBox, details),
    React.createElement(TextBox, {}, text ),
    React.createElement(Like, {count: likes, likeAdd: likeAdd})
  )
)

BlogItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.object,
  details: PropTypes.object,
  text: PropTypes.string,
  likes: PropTypes.number,
  likeAdd: PropTypes.func.isRequired
}
