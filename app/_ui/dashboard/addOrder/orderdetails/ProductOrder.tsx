"use client"

import React, { FC } from 'react'
import CardProductOrder, { ProductOrderProps } from './CardProductOrder'

const  ProductOrder:FC<{products:Array<ProductOrderProps>}> = ({products}) => {
  return (
    <div className='grow overflow-y-scroll'>
      {products?.map((item,idx)=>{
        return  <CardProductOrder key={idx} item={item} />
      })}
      
    </div>
  )
}

export default ProductOrder
