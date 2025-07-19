import CategoryDetails from '@/app/_ui/dashboard/categories/categoryDetails';
import React from 'react'



type tParams = Promise<{ id: string }>;
const page = async({ params }: { params: tParams }) => {
      const slug = await params;
      const categoryID = slug.id;
  return (
    <div>
      <CategoryDetails  category={categoryID}/>
    </div>
  )
}

export default page
