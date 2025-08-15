"use client"

import React, { FC } from 'react'
import HeaderPages from '../../headerpages/HeaderPages'
import LabelGlobal from '../../lable/LabelGlobal'
import { GetOrderyByIdQuery } from '@/reactQuery/orders/query'
import Loader from '../../loader/Loader'
import { useTranslation } from 'react-i18next'
import { DataTable } from '../productsList/DataTable'
import { Colum } from '../productsList/columns'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const OrderDetails:FC<{id:string}> = ({id}) => {
    const {t} = useTranslation()
    const router = useRouter()
    const {data:order,isLoading,isSuccess} = GetOrderyByIdQuery(id)
      const columns = Colum(t)
  return (
     <div className=''>
        <HeaderPages title={""} >
            <Button onClick={()=> router.push(`/dashboard/addorder/${id}`)} >view</Button>
        </HeaderPages>
      
  
      <div className='w-full md:w-3/4 mx-auto  p-5 rounded-lg my-7 bg-sidebar'>
      {isLoading && <div className='min-h-48 w-full flex justify-center items-center'>
        <Loader />
         </div>}
         {isSuccess &&<div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
              <LabelGlobal title={t("menu.orders.input.total")} info={`$${order?.total}`} />
              <LabelGlobal title={t("menu.orders.input.discountedTotal")} info={`$${order?.discountedTotal}`} />
                <LabelGlobal title={t("menu.orders.input.totalProducts")} info={order?.totalProducts} />
              <LabelGlobal title={t("menu.orders.input.totalQuantity")} info={order?.totalQuantity} />
         </div>}

      </div>

       <div className='w-full md:w-3/4 mx-auto  p-5 rounded-lg my-7 bg-sidebar'>
        <DataTable data={isSuccess?order?.products:[]} totalPages={0} columns={columns} />
       </div>
    </div>
  )
}

export default OrderDetails
