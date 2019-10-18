import React from "react";

import "./checkout.styles.scss";

const Checkout = () => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="heaer-block">
        <span>Product</span>
      </div>
      <div className="heaer-block">
        <span>Description</span>
      </div>
      <div className="heaer-block">
        <span>Quantity</span>
      </div>
      <div className="heaer-block">
        <span>Price</span>
      </div>
      <div className="heaer-block">
        <span>Remove</span>
      </div>
    </div>
  </div>
);

export default Checkout;
