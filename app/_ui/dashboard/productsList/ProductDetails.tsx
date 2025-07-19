"use client"

import { GetProductBYiDQuery } from '@/reactQuery/product/query'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import HeaderPages from '../../headerpages/HeaderPages'
import Loader from '../../loader/Loader'
import LabelGlobal from '../../lable/LabelGlobal'

const ProductDetails:FC<{id:string}> = ({id}) => {
    const {data:product,isSuccess,isLoading} = GetProductBYiDQuery(id)
     const {t} = useTranslation()
     console.log(product)
     const discount = parseFloat(product?.discountPercentage)

     const finalprice  = product?.price * ( discount /100 )
  return (
    <div className=''>
        <HeaderPages title={product?.title} >
            <></>
        </HeaderPages>
      
  
      <div className='w-full md:w-3/4 mx-auto bg-background p-3 rounded-lg my-5'>
      {isLoading && <div className='min-h-48 w-full flex justify-center items-center'>
        <Loader />
         </div>}
         {isSuccess &&<div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
              <LabelGlobal title={t("menu.products.input.name")} info={product.title} />
              <LabelGlobal title={t("menu.products.input.sku")} info={product.sku} />
                <LabelGlobal title={t("menu.products.input.availabilityStatus")} info={product.availabilityStatus} />
              <LabelGlobal title={t("menu.products.input.description")} info={product.description} />
              <LabelGlobal title={t("menu.products.input.price")} info={`$${product.price}`} />
              <LabelGlobal title={t("menu.products.input.percDiscount")} info={`%${product.discountPercentage}`} />
              <LabelGlobal title={t("menu.products.input.discount")} info={`$${finalprice.toFixed(2)}`} />

              <LabelGlobal title={t("menu.products.input.finalprice")} info={`$${(product.price - finalprice ).toFixed(2)}`} />
         </div>}

      </div>
    </div>
  )
}

export default ProductDetails

