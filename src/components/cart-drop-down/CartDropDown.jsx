import React from "react";
import CustomButton from "../custom-button/custom-botton";
import "./CartDropDown.scss";

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default Cart;
