import React from 'react'
import { Colum } from './columns'
import { DataTable } from './DataTable'
import { GetAllProductQuery } from '@/reactQuery/product/query'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '@/redux/hooks'

const TableList = () => {
   const {t} = useTranslation()
   const {pageSize,page} = useAppSelector(state => state.cart)
  const {data:products,isSuccess,isLoading} = GetAllProductQuery("all",page,pageSize)
    const columns = Colum(t)
     const totalPages = Math.ceil((products?.total || 0) / pageSize);
  return (
    <div>
      
      <DataTable isLoading={isLoading} columns={columns} data={isSuccess ?products?.products:[]} totalPages={totalPages} />
    </div>
  )
}

export default TableList
