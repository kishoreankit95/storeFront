import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const navigate = useNavigate();

    const orderConfirm = () => {
        navigate("/orders")
    }

  return (
    <div>Cart</div>
  )
}

export default Cart