import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';

import Cart from '../../bundles/containers/cart';
import CartComponent from '../../bundles/components/Cart/cart';
import reducers from '../../bundles/reducers';

describe('/containers/cart', () => {
  const middleWares = [];
  const mockStore = configureStore(middleWares);
  const store = mockStore(reducers);
  const wrapper = shallow(<Provider store={store}>
    <Cart />
  </Provider>);

  it('CartComponent exist', () => {
    expect(wrapper.find(CartComponent)).to.exist;
  });

  it('Props exist: shoppingCart', () => {
    expect(wrapper.find('[shoppingCart]')).to.exist;
  });

  it('Props exist: isChanged', () => {
    expect(wrapper.find('[isChanged]')).to.exist;
  });

  it('Props exist: fetchCart', () => {
    expect(wrapper.find('[fetchCart]')).to.exist;
  });

  it('Props exist: deleteCart', () => {
    expect(wrapper.find('[deleteCart]')).to.exist;
  });

  it('Props exist: updateCart', () => {
    expect(wrapper.find('[updateCart]')).to.exist;
  });
});
