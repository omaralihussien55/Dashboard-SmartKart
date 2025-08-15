"use client"
import React, { FC } from 'react'
import InfoOrder from './infoOrder'
import ProductOrder from './ProductOrder'
import InfoTotal from './InfoTotal'
import BtnOrder from './BtnOrder'
import { GetOrderyByIdQuery } from '@/reactQuery/orders/query'

const OrderDetails:FC<{id:string | undefined}> = ({id}) => {
               const {data:order} = GetOrderyByIdQuery(id)
               console.log("orde",order)
  return (
    <div className='bg-sidebar h-screen flex flex-col justify-between px-3 py-2'>
       <InfoOrder order={order&&order} />
       <ProductOrder products={order?.products} />
       <InfoTotal order={order&&order} />
       <BtnOrder />
    </div>
  )
}

export default OrderDetails
