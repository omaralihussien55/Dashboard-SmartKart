import React, { FC } from 'react'
import LableOrder from './LableOrder'
import { ProductOrderProps } from './CardProductOrder'

const InfoOrder:FC<{order:ProductOrderProps}> = ({order}) => {
  return (
    <div>
      <LableOrder title='order' info={`#${order?.id}`} />
    </div>
  )
}

export default InfoOrder
