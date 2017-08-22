import { connect } from 'react-redux';
import Like from './../components/ui/Like';

const stateToProps = (state) => ({
  error: state.post.error
});

export default connect(stateToProps)(Like);
