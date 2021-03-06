import React from 'react';
import Cart from '../../../bundles/components/Cart/cart';

describe('/components/Cart/Cart', () => {
  const fakefetchCart = spy();
  const deleteCart =()=>{};
  const updateCart =()=>{};
  const isChanged = false;
  const fakeshoppingCart = [];
  const wrapper = shallow(<Cart
    fetchCart={fakefetchCart}
    shoppingCart={fakeshoppingCart}
    deleteCart ={deleteCart}
    updateCart = {updateCart}
    isChanged = {isChanged}
    />);

  it('type of Cart', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('has a class name of "cart"', () => {
    expect(wrapper.find('.cart')).to.exist;
  });

  it('first child has class name of "itemListforCart"', () => {
    expect(wrapper.childAt(0).type()).to.equal('div');
    expect(wrapper.childAt(0).props().className).to.equal('itemListforCart');
  });

  it('second child type of "h2" and get total', () => {
    expect(wrapper.childAt(1).type()).to.equal('h2');
    expect(wrapper.childAt(1).text()).to.equal('Total: 0');
  });

  it('fetchCart has been called', () => {
    expect(fakefetchCart.called).to.equal(true);
  });
});
