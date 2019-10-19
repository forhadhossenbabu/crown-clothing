import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //   const priceForStripe = price * 100;
  const publishableKey = "pk_test_FulpYgeGyECpbA8jVhVywC7r00dE61eNAK";

  const onToken = token => {
    console.log(token);
    alert("Payment Success");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN CLOTHING LTD"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
