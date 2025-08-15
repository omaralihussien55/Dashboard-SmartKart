import React, { FC } from 'react'
import LableOrder from './LableOrder'

const InfoTotal:FC<{order:any}> = ({order}) => {
  return (
    <div>
      <LableOrder title='Total' info={`$${order?.discountedTotal}`} />
    </div>
  )
}

export default InfoTotal
