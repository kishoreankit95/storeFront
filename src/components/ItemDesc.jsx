import React from 'react'

const ItemDesc = ({itemData}) => {
  console.log(itemData)
  return (
    <div>
        <p>Product Name: <span>{itemData?.selItem?.name}</span></p>
        <p>Short Description: <span>{itemData?.selItem?.shortDesc}</span></p>
        <p>Price: <span>{itemData?.selItem?.price}</span></p>
        <p>Discount: <span>{itemData?.selItem?.discount}</span></p>
        <p>Actual Price: <span>{itemData?.selItem?.actualPrice}</span></p>
    </div>
  )
}

export default ItemDesc