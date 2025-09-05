"use client"
import React, { FC } from 'react'
import LableOrder from './LableOrder'
import { ProductOrderProps } from './CardProductOrder'

const InfoTotal:FC<{order:ProductOrderProps}> = ({order}) => {
  return (
    <div>
      <LableOrder title='Total' info={`$${order?.discountedTotal}`} />
    </div>
  )
}

export default InfoTotal
