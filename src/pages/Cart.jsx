import React, {useState, useContext, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import ItemDesc from '../components/ItemDesc';
import { ContextDispatch } from '../App';

const Cart = () => {

  const [name, setName] = useState("");

  const nameRef = useRef();
  const addRef = useRef();
  const emailRef = useRef();
  const numRef = useRef();
  const ccNumRef = useRef();

  const navigate = useNavigate();

  const stateImport = useContext(ContextDispatch);

  const orderConfirm = () => {
    let nameVal = nameRef.current.value;
    stateImport.stateChanger({type: "cAddress", value: addRef.current.value});
    stateImport.stateChanger({type: "cName", value: nameRef.current.value});
    stateImport.stateChanger({type: "cEmail", value: emailRef.current.value});
    stateImport.stateChanger({type: "cNumber", value: numRef.current.value});
    stateImport.stateChanger({type: "ccNumber", value: ccNumRef.current.value});
    navigate("/orders");
  }

  

  return (
    <div>
      <div className='d-flex flex-wrap '>
        <div className='w-50pc mb-20'>
          <label for="name">Name</label>
          <input id="name" type='text' ref={nameRef} />
        </div>
        <div className='w-50pc mb-20'>
          <label for="address">Address</label>
          <input id="address" type='text' ref={addRef} />
        </div>
        <div className='w-50pc mb-20'>
          <label for="email">Email</label>
          <input id="email" type='text' ref={emailRef} />
        </div>
        <div className='w-50pc mb-20'>
          <label for="number">Phone Number</label>
          <input id="number" type='number' ref={numRef} />
        </div>
        <div className='w-50pc mb-20'>
          <label for="ccNumber">Credit Card Number</label>
          <input id="ccNumber" type='number' ref={ccNumRef} />
        </div>
      </div>
      <div className='orderDetailCont mb-20'>
        <p>Item details:</p>
        {/* <div>
          <p>Product Name: <span></span></p>
          <p>Short Description: <span></span></p>
          <p>Price: <span></span></p>
          <p>Discount: <span></span></p>
          <p>Actual Price: <span></span></p>
        </div> */}
        <ItemDesc itemData={stateImport.state}/>
      </div>
        <div className='d-flex jc-flexEnd al-center'>
          <p className='mr-20 my-0'>Proceed to Order Items - </p>
          <button className='btn-1' onClick={orderConfirm}>Order Now</button>
        </div>
    </div>
  )
}

export default Cart