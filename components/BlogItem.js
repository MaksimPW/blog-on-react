const BlogItem = (props) => (
  DOM.div(
    { },
    React.createElement(Image, props.image ),
    React.createElement(DetailsBox, props.details),
    React.createElement(TextBox, {}, props.text ),
  )
)

BlogItem.propTypes = {
  image: PropTypes.object,
  details: PropTypes.object,
  text: PropTypes.string
}
