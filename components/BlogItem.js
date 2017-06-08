const BlogItem = (props) => (
  DOM.div(
    { },
    React.createElement(Image, { src: props.image }),
    React.createElement(TextBox, {}, props.text ),
  )
);
