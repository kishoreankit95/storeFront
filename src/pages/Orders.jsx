import React from 'react';
import ItemDesc from '../components/ItemDesc';

const Orders = () => {
  return (
    <div>
      <p>Order no: <span></span></p>
      <div>
        <p>Item details:</p>
        <ItemDesc />
        <p>Amount : <span></span></p>
      </div>
    </div>
  )
}

export default Orders