const TextBox = (props) => (
  <span>{props.children}</span>
);

TextBox.defaultProps = {
  children: 'default text',
}

TextBox.propTypes = {
  children: PropTypes.string
}
