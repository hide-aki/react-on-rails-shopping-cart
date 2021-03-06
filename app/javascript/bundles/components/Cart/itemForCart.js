import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from '../common/counter';
import { itemProps, itemPropsInit } from '../common/defaultPropTypes.js';


export default class ItemForCart extends Component {
  constructor(props) {
    super();
    this.state = {
      total: props.item.qty * props.item.price
    };
    this.updateQty = this.updateQty.bind(this);
    this.deleteCartClick = this.deleteCartClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item.qty !== nextProps.item.qty) this.setState({ total: nextProps.item.qty * nextProps.item.price });
  }

  updateQty(qty) {
    const newTotal = this.props.item.price * Number(qty);
    this.setState({ total: newTotal });
    const { item } = this.props;
    this.props.updateCart(item, qty);
  }

  deleteCartClick() {
    const { item } = this.props;
    this.props.deleteCart(item);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="itemforCart">
        <img src={`../assets/${item.itemImg}`} alt={item.itemID} className="img" />
        <div className="iteminfoforCart">
          <h4>{item.itemName}</h4>
          <p>{item.describe}</p>
          <p>Price: {item.price}</p>
          <Counter
            item={item}
            qty={item.qty}
            updateQty={this.updateQty}
          />
          <p>Total: {this.state.total}<button className="trash" onClick={this.deleteCartClick}><span className="fa fa-trash" /></button></p>
        </div>
      </div>
    );
  }
}

ItemForCart.propTypes = {
  item: PropTypes.shape(itemProps),
  updateCart: PropTypes.func.isRequired,
  deleteCart: PropTypes.func.isRequired
};

ItemForCart.defaultProps = {
  item: PropTypes.shape(itemPropsInit),
};
