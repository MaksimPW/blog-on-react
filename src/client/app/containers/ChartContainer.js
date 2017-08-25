import { connect } from 'react-redux';
import { map } from 'lodash/collection';

import Chart from './../components/ui/Chart';

import Like from './../components/ui/Like';
import TextBox from './../components/ui/TextBox';

const stateToProps = (state) => ({
  columns: map(
    state.posts.entries,
    (post) => (
      [
        post.title || TextBox.defaultProps.children,
        post.likes || Like.defaultProps.count
      ]
    )
  )
});

export default connect(stateToProps)(Chart);
