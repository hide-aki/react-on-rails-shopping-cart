import { connect } from 'react-redux';
import { fetchCart, deleteCart, updateCart } from '../actions/index';
import { bindActionCreators } from 'redux';

import Cart from '../components/Cart/cart';


const mapStateToProps = (state) => ({
  shoppingCart: state.ShoppingCartReducer.shoppingCart,
  isChanged: state.ShoppingCartReducer.isChanged,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchCart, deleteCart, updateCart }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

