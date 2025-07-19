"use client"

import React, { FC } from 'react'
import { DataTable } from '../productsList/DataTable';
import { GetProductByCategoryQuery } from '@/reactQuery/product/query';
import { Colum } from '../productsList/columns';
import { useAppSelector } from '@/redux/hooks';
import { useTranslation } from 'react-i18next';
import HeaderPages from '../../headerpages/HeaderPages';

const CategoryDetails:FC<{category:string}> = ({category}) => {
    const {t} = useTranslation()
     const {data:products,isSuccess,isLoading} = GetProductByCategoryQuery(category)
     const {pageSize} = useAppSelector(state => state.cart)
     const columns = Colum(t)
         const totalPages = Math.ceil((products?.total || 0) / pageSize);
  return (
    <div>  
        <HeaderPages title={category}>
            <></>
        </HeaderPages>
            
            <DataTable isLoading={isLoading} columns={columns} data={isSuccess ?products?.products:[]} totalPages={totalPages} />
    </div>
  )
}

export default CategoryDetails
