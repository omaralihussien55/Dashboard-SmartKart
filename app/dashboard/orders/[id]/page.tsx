import OrderDetails from '@/app/_ui/dashboard/orders/OrderDetails'
import React from 'react'

const page:React.FC<{params:Promise<{id:string}>}> = async ({params}) => {
    const id = (await params).id
  return (
    <div>
      <OrderDetails id={id} />
    </div>
  )
}

export default page
