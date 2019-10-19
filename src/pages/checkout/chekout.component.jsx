import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const Checkout = ({ cartItems, total, dispatch }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="heaer-block">
        <span>Product</span>
      </div>
      <div className="heaer-block">
        <span>Name</span>
      </div>
      <div className="heaer-block">
        <span>Price</span>
      </div>
      <div className="heaer-block">
        <span>Quantity</span>
      </div>
      <div className="heaer-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem, idx) => (
      <CheckoutItem cartItem={cartItem} key={idx} />
    ))}
    <div className="total">
      <span>Total: ${total}</span>
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
