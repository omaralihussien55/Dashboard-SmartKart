"use client"
import React, { FC } from 'react'
import Header from './Header'
import MenuList from './posdetails/MenuList'
import OrderDetails from './orderdetails/OrderDetails'

const AddOrderList:FC<{id?:string}> = ({id}) => {

  return (
    <div>
      <div className='flex gap-3 flex-wrap md:flex-nowrap'>
        <div className='w-full md:w-1/4'>
             <OrderDetails id={id} />
        </div>
         <div className='w-full md:w-3/4 h-screen'>
         <div className='w-[90%] mx-auto'>
              <Header />
             <MenuList />
         </div>

        </div>
      </div>
    </div>
  )
}

export default AddOrderList
