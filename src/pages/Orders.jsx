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
        <p>Item details:</p>
        <ItemDesc itemData={stateImport} />
        <p>Amount deducted on your card: <span>{stateImport?.selItem?.actualPrice}</span></p>
      </div>
    </div>
  )
}

export default Orders