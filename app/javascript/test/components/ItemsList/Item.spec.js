import React from 'react';
import Item from '../../../bundles/components/ItemsList/item';

describe('/components/ItemsList/Item', () => {
  const fakekey = 'fakeitemkey';
  const fakeitem = {
    itemID: 'fakeitem',
    itemImg: './src/imgs/items/fakeitem.jpg',
    itemName: 'fakeitem',
    describe: 'fakeitem',
    price: 10000
  };
  const fakeshoppingCart = [fakeitem];
  const addToCartSpy = spy();
  const updateCartSpy = spy();

  const wrapper = shallow(<Item
    key={fakeitem.itemID}
    item={fakeitem}
    shoppingCart={fakeshoppingCart}
    addToCart={addToCartSpy}
    updateCart={updateCartSpy}
  />);

  it('type of Item', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('has a class name of "item"', () => {
    expect(wrapper.find('.item')).to.exist;
  });

  it('first child is a "img"', () => {
    expect(wrapper.childAt(0).type()).to.equal('img');
  });

  it('second child is a "div" has class name of "item-info"', () => {
    expect(wrapper.childAt(1).props().className).to.equal('item-info');
  });

  it('second child "item-info" has 5 children', () => {
    expect(wrapper.childAt(1).children()).to.have.length(5);
  });

  it('second child "item-info" contains <h4>{item.itemName}</h4><p>{item.describe}</p><p>Price: {item.price}</p>', () => {
    expect(wrapper.childAt(1).containsAllMatchingElements([
      <h4>{fakeitem.itemName}</h4>,
      <p>{fakeitem.describe}</p>,
      <p>Price: {fakeitem.price}</p>
    ])).to.equal(true);
  });

  it('second child "item-info" contains <Counter/>', () => {
    expect(wrapper.childAt(1).find('Counter')).to.exist;
  });

  it('addToCart button click: updateCart', () => {
    wrapper.find('button').simulate('click');
    expect(updateCartSpy.called).to.equal(true);
  });

  it('addToCart button click: addToCart', () => {
    const wrapper2 = shallow(<Item
      key={fakekey}
      item={fakeitem}
      shoppingCart={[]}
      addToCart={addToCartSpy}
      updateCart={updateCartSpy}
    />);
    wrapper2.find('button').simulate('click');
    expect(addToCartSpy.called).to.equal(true);
  });
});

