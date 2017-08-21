import { connect } from 'react-redux';
import Like from './../components/ui/Like';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect(stateToProps)(Like);
