import React from 'react'

const ItemDesc = ({itemData, actualPric}) => {
  console.log(itemData)
  return (
    <div>
        <p>Product Name : <span className='fontItem'>{itemData?.selItem?.name}</span></p>
        <p>Short Description : <span className='fontItem'>{itemData?.selItem?.shortDesc}</span></p>
        <p>Price : <span className='fontItem'>{itemData?.selItem?.price}</span></p>
        <p>Discount % : <span className='fontItem'>{itemData?.selItem?.discount}</span></p>
        <p>Actual Price : <span className='fontItem'>{itemData?.actPrice}</span></p>
    </div>
  )
}

export default ItemDesc