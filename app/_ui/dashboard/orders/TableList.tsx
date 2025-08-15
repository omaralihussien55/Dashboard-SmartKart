import React from 'react'
import { Colum } from './columns'
import { DataTable } from './DataTable'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '@/redux/hooks'
import { GetOrdersQuery } from '@/reactQuery/orders/query'

const TableList = () => {
    const {t} = useTranslation()
    const {pageSize,page} = useAppSelector(state => state.cart)
    const {data:orders,isSuccess,isLoading} = GetOrdersQuery(page,pageSize)
    const columns = Colum(t)
     const totalPages = Math.ceil((orders?.total || 0) / pageSize);
     console.log("jk",totalPages)
  return (
    <div>
      
      <DataTable isLoading={isLoading} columns={columns} data={isSuccess ?orders?.carts:[]} totalPages={totalPages} />
    </div>
  )
}

export default TableList
