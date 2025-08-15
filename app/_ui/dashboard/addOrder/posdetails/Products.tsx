"use client"

import React from 'react'
import CardProduct from './CardProduct'
import { GetAllProductQuery } from '@/reactQuery/product/query'
import { useAppSelector } from '@/redux/hooks'
import PaginationProducts from '../../productsList/Pagination'
import { ProductOrderProps } from '../orderdetails/CardProductOrder'

const Products = () => {
  const {page,pageSize,category} = useAppSelector(state=> state.cart)
  const {data:products} = GetAllProductQuery(category,page,pageSize)
  const totalPages = Math.ceil((products?.total || 0) / pageSize);
  return (
    <div className='mt-6 flex flex-col justify-between gap-3 h-full p-2'>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 grow'>
        {products?.products?.map((item:ProductOrderProps,index:number)=>{
          return  <CardProduct key={index} item={item} />
        })}
          
          
       </div>
        <div>
             <PaginationProducts totalPage={Number(totalPages)} />
        </div>
    </div>
  )
}

export default Products
