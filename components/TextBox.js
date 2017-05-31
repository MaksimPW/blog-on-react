const TextBox = ({ text }) => (
  <span>{text}</span>
);

TextBox.defaultProps = {
  text: 'default text',
};
