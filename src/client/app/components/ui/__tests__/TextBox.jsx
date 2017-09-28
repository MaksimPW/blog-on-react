import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import TextBox from '../TextBox';

describe('TextBox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextBox />, div);
  });
});

