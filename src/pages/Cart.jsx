import React, {useState, useContext, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ItemDesc from '../components/ItemDesc';
import { ContextDispatch } from '../App';

const Cart = () => {

  const [error, setError] = useState(true);

  const nameRef = useRef();
  const addRef = useRef();
  const emailRef = useRef();
  const numRef = useRef();
  const ccNumRef = useRef();

  const navigate = useNavigate();

  const stateImport = useContext(ContextDispatch);

  const validationChecker = () => {
    let errorFlag = false;

    let nameVal = nameRef.current.value;
    let addVal = addRef.current.value;
    let emailVal = emailRef.current.value;
    let numVal = numRef.current.value;
    let ccVal = ccNumRef.current.value;
    
    if(!/^[a-zA-Z\s]+$/.test(nameVal)){
      errorFlag=true;
      return errorFlag;
    }

    if(addVal.length<1){
      errorFlag=true;
      return errorFlag;
    }

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailVal)){
      errorFlag = true;
      return errorFlag;
    }

    if(!/^\d{10}$/.test(numVal)){
      errorFlag=true;
      return errorFlag;
    }

    if(!/^\d{19}$/.test(ccVal)){
      errorFlag=true;
      return errorFlag;
    }

    return errorFlag;
  }

  const orderConfirm = () => {
    setError(false);
    let formError = validationChecker();
    setError(formError);
    // if(!error){
    //   stateImport.stateChanger({type: "cAddress", value: addRef.current.value});
    //   stateImport.stateChanger({type: "cName", value: nameRef.current.value});
    //   stateImport.stateChanger({type: "cEmail", value: emailRef.current.value});
    //   stateImport.stateChanger({type: "cNumber", value: numRef.current.value});
    //   stateImport.stateChanger({type: "ccNumber", value: ccNumRef.current.value});
    //   navigate("/orders");
    // }    
  }

  useEffect(() => {
    if(!error){
      stateImport.stateChanger({type: "cAddress", value: addRef.current.value});
      stateImport.stateChanger({type: "cName", value: nameRef.current.value});
      stateImport.stateChanger({type: "cEmail", value: emailRef.current.value});
      stateImport.stateChanger({type: "cNumber", value: numRef.current.value});
      stateImport.stateChanger({type: "ccNumber", value: ccNumRef.current.value});
      navigate("/orders");
    }
  }, [error])

  return (
    <div>
      {error? <p className='fontItem mb-20'>*Please enter all fields mandatorily and correctly*</p> : ""}
      <div className='d-flex flex-wrap '>
        <div className='w-50pc mb-20'>
          <label for="name">Name</label>
          <input id="name" type='text' ref={nameRef} />
        </div>
        <div className='w-50pc mb-20'>
          <label for="address">Address</label>
          <input id="address" type='text' ref={addRef} required/>
        </div>
        <div className='w-50pc mb-20'>
          <label for="email">Email</label>
          <input id="email" type='text' ref={emailRef} />
        </div>
        <div className='w-50pc mb-20'>
          <label for="number">Phone Number</label>
          <input id="number" type='text' ref={numRef} />
        </div>
        <div className='w-50pc mb-20'>
          <label for="ccNumber">Credit Card Number</label>
          <input id="ccNumber" type='text' ref={ccNumRef} />
        </div>
      </div>
      <div className='orderDetailCont mb-20'>
        <p>Item details:</p>
       
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