import React, { FC } from 'react'
import LableOrder from './LableOrder'

const InfoOrder:FC<{order:any}> = ({order}) => {
  return (
    <div>
      <LableOrder title='order' info={`#${order?.id}`} />
    </div>
  )
}

export default InfoOrder
