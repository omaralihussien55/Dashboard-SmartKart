import React, { FC } from 'react'

const CardProductOrder:FC<{item:any}> = ({item}) => {
  return (
    <>
    <div className='grid gap-2 p-2 mb-2'>
      <div className='flex gap-3'>
            
            <div className='grid gap-1 grow'>
                <h4 className='text-left font-bold text-gray-800'>{item.title}</h4>
                <span className='block text-left text-gray-400'>${item.price}</span>
            </div>
            <div className='flex justify-center items-center'>
                <div className='size-10 rounded-full overflow-hidden'>
                  <img src={item.thumbnail} alt='' className='w-full h-full object-cover' />
                </div>
            </div>
      </div>

      <div className='flex gap-1.5 justify-between'>

            <div className='grow flex space-x-1.5'>
              <span className='p-2 size-6 rounded-sm flex items-center justify-center bg-gray-100 cursor-pointer '>+</span>
              <span className='p-2 size-6 rounded-sm flex items-center justify-center '>{item.quantity}</span>
              <span className='p-2 size-6 rounded-sm flex items-center justify-center bg-gray-100 cursor-pointer '>-</span>
           </div>



           <div className="flex gap-1">
              <span className='px-1.5 py-0.5 text-gray-500 rounded-md text-center bg-gray-100'>${item.discountedTotal}</span>
              <span className='px-1.5 py-0.5 text-gray-500 rounded-md text-center bg-gray-100 line-through'>${`${Number(item.total).toFixed(2)}`}</span>
              <span className='px-1.5 py-0.5 text-gray-500 rounded-md text-center bg-gray-100'>%{item.discountPercentage}</span>
           </div>



      </div>
    </div>
    <hr className='mt-1'/>
    </>
  )
}

export default CardProductOrder
