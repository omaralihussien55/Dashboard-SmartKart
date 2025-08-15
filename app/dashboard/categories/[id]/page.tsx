
import CategoryDetails from '@/app/_ui/dashboard/categories/categoryDetails';
import React from 'react'



type tParams = Promise<{ id: string }>;
const CategoryDetailpage = async({ params }: { params: tParams }) => {
      const categoryID =(await params).id;
  return (
    <div>
      <CategoryDetails category={categoryID}/>
    </div>
  )
}

export default CategoryDetailpage
