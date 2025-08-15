"use client"
import { AddCardQuery } from '@/reactQuery/orders/query'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

const CardProduct:FC<{item:any}> = ({item}) => {
  const {mutate:AddToCart} = AddCardQuery()
const router = useRouter()
  const addCart = ()=>{
    AddToCart({
         userId: 33,
         products: [
             { id: item.id, quantity: 1},
           ]
          },{onSuccess(data, variables, context) {
             console.log(data,variables,context)
             router.push(`/dashboard/addorder/${48}`)
          },})
  }
  return (
    <div className='h-[170px] bg-sidebar rounded-lg' onClick={addCart}>
        <div className='w-[97%] h-full flex flex-col justify-between'>
              <div className='w-full flex items-center justify-center'>
                  <div className='size-14 rounded-full overflow-hidden'>
                    <img src={item.thumbnail}  className='w-full h-full' alt='' />
                  </div>
              </div>

              <div className='grow'>
                <h4 className='text-center text-gray-900 font-bold p-1 mb-1.5'>{item.title}</h4>
                <p className='text-center text-gray-500 p-1 mb-1.5'>${item.price}</p>
              </div>
        </div>
    </div>

  )
}

export default CardProduct
