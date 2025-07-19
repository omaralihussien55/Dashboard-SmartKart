import React from 'react'
import { useTranslation } from 'react-i18next'
import { Colum } from './columns'
import { DataTable } from './DataTable'
import { GetCategoryByUseInfinte } from '@/reactQuery/categories/query'

const TableList = () => {
   const {t} = useTranslation()
//    const {pageSize,page} = useAppSelector(state => state.cart)
  const {data:categories,isSuccess,isLoading} = GetCategoryByUseInfinte()
    const columns = Colum(t)
    console.log(categories)
  return (
    <div>
      
      <DataTable isLoading={isLoading} columns={columns} data={isSuccess ?categories:[]}  />
    </div>
  )
}

export default TableList
