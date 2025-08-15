import AddOrderList from '@/app/_ui/dashboard/addOrder/AddOrderList'
import React from 'react'

const page:React.FC<{params:Promise<{id:string}>}> = async ({params}) => {
    const id = (await params).id
  return (
    <div>
      <AddOrderList id={id} />
    </div>
  )
}

export default page
