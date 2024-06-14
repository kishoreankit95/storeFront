import React, {useContext} from 'react';
import ItemDesc from '../components/ItemDesc';
import { ContextDispatch } from '../App';

const Orders = () => {

  const stateImport = useContext(ContextDispatch);

  const orderNoGenerator = () => {
    let ordertxt = "";
    let date = new Date();
    ordertxt += date.getMonth() + "-"+  date.getDate() + "-" + date.getFullYear() + "/"+ Math.floor(Math.random()*100);
    return ordertxt;
  }

  return (
    <div>
      <p>Order no: <span>{orderNoGenerator()}</span></p>
      <div>
        <p>Thank you <b>{stateImport.state.cName}</b> for placing the order on us</p>
        <p>The order would be dispatched at: <b>{stateImport.state.cAddress}</b> in the next 3 working days</p>
      </div>
      <div>
        <p>Item details:</p>
        <ItemDesc itemData={stateImport.state} />
        <p>Amount deducted on your card: <span className='fontItem'>{stateImport?.state?.actPrice}</span></p>
      </div>
    </div>
  )
}

export default Orders