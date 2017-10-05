import React from 'react';
import ReactDOM from 'react-dom';

import BlogItem from './../BlogItem';
import Image from './../Image';

import { shallow } from 'enzyme';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { fakeState } from './../../../helpers/test/fakeState';
import { fakeStore } from './../../../helpers/test/fakeStore';
import createHistory from './../../../helpers/history.js';
const history = createHistory;

describe('BlogItem', () => {
  const state = fakeState;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={fakeStore(state)}>
        <Router history={history}>
          <BlogItem />
        </Router>
      </Provider>, div);
  });

  describe('BlogItem', () => {
    it('should render the image', () => {
      const itemProps = {
        src: '/image/1',
        alt: 'alt'
      };

      const item = shallow(<BlogItem image={itemProps} />);

      const header = <Image
        src='/image/1'
        alt='alt' />;

      expect(item.contains(header)).toEqual(true);
    });
  });
});
