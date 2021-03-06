import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';

import Content from '../../bundles/containers/content';
import ContentComponent from '../../bundles/components/ItemsList/content';
import reducers from '../../bundles/reducers';

describe('/containers/content', () => {
  const middleWares = [];
  const mockStore = configureStore(middleWares);
  const store = mockStore(reducers);
  const wrapper = shallow(<Provider store={store}>
      <Content />
    </Provider>);

  it('ContentComponent exist', () => {
    expect(wrapper.find(ContentComponent)).to.exist;
  });

  it('Props exist: item', () => {
    expect(wrapper.find('[item]')).to.exist;
  });

  it('Props exist: shoppingCart', () => {
    expect(wrapper.find('[shoppingCart]')).to.exist;
  });

  it('Props exist: addToCart', () => {
    expect(wrapper.find('[addToCart]')).to.exist;
  });

  it('Props exist: updateCart', () => {
    expect(wrapper.find('[updateCart]')).to.exist;
  });

  it('Props exist: fetchItemList', () => {
    expect(wrapper.find('[fetchItemList]')).to.exist;
  });
});
