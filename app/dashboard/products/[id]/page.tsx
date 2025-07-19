
import ProductDetails from '@/app/_ui/dashboard/productsList/ProductDetails';
import React from 'react'

type tParams = Promise<{ id: string }>;
const page = async({ params }: { params: tParams }) => {
      const slug = await params;
      const productID = slug.id;
  return (
    <div>
      <ProductDetails id={productID}/>
    </div>
  )
}

export default page
