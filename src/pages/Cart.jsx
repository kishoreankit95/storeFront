import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import ItemDesc from '../components/ItemDesc';
import { ContextDispatch } from '../App';

const Cart = () => {

  const [name, setName] = useState("");

  const navigate = useNavigate();

  const orderConfirm = () => {
    navigate("/orders");
  }

  const stateImport = useContext(ContextDispatch);

  return (
    <div>
      <div>
        <div>
          <label for="name">Name</label>
          <input id="name" type='text' />
        </div>
        <div>
          <label for="address">Address</label>
          <input id="address" type='text' />
        </div>
        <div>
          <label for="email">Email</label>
          <input id="email" type='text' />
        </div>
        <div>
          <label for="number">Phone Number</label>
          <input id="number" type='number' />
        </div>
        <div>
          <label for="ccNumber">Credit Card Number</label>
          <input id="ccNumber" type='number' />
        </div>
      </div>
      <div>
        <p>Item details:</p>
        {/* <div>
          <p>Product Name: <span></span></p>
          <p>Short Description: <span></span></p>
          <p>Price: <span></span></p>
          <p>Discount: <span></span></p>
          <p>Actual Price: <span></span></p>
        </div> */}
        <ItemDesc itemData={stateImport}/>
      </div>
        <div>
          <p>Proceed to Order Items:</p>
          <button className='btn-1' onClick={orderConfirm}>Order Now</button>
        </div>
    </div>
  )
}

export default Cart