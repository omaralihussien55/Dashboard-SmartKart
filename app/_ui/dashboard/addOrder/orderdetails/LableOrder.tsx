
"use client"
import React, { FC } from 'react'

const LableOrder:FC<{title:string,info:string}> = ({title,info}) => {
  return (
    <div className='flex justify-between items-center gap-2 mb-1.5 p-1'>
     <p className='text-gray-400 '>{info}</p>
      <h5 className=' text-gray-800 '>{title}</h5>
    </div>
  )
}

export default LableOrder
