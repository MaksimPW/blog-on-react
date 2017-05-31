const BlogItem = ({ props }) => (
  DOM.div(
    { },
    React.createElement(Image, { image: props.image }),
    React.createElement(TextBox, { text: props.text }),
  )
);
