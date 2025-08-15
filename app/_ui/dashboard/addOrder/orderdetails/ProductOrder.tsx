import React, { FC } from 'react'
import CardProductOrder from './CardProductOrder'

const  ProductOrder:FC<{products:Array<any>}> = ({products}) => {
  return (
    <div className='grow overflow-y-scroll'>
      {products?.map((item,idx)=>{
        return  <CardProductOrder key={idx} item={item} />
      })}
      
    </div>
  )
}

export default ProductOrder
