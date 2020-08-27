import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const getCart = props.cart;

  let subTotal = 0;
  for (let i = 0; i < getCart.length; i++) {
    const element = getCart[i];
    subTotal = subTotal + element.price;
  }
  let discount = 0;
  if (subTotal > 500) {
    discount = 49.99;
  } else if (subTotal > 300) {
    discount = 29.99;
  } else if (subTotal > 200) {
    discount = 19.99;
  } else if (subTotal > 100) {
    discount = 9.99;
  }

  const formatPrice = (number) => {
    const precision = number.toFixed(2);
    return Number(precision);
  };
  return (
    <div className='cart'>
      <h1>Cart</h1>
      <h4>
        Total Courses: <span className='total-course'>{getCart.length}</span>{" "}
      </h4>
      <h5>Subtotal: ${formatPrice(subTotal)}</h5>
      <p>Discount: -${discount}</p>
      <h3>Total: ${subTotal - discount}</h3>
      <div className='button'>
        <button className='btn btn-warning'>
          <FontAwesomeIcon icon={faInfoCircle} /> View Cart Details
        </button>
      </div>
    </div>
  );
};

export default Cart;
