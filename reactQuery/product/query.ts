import { useQuery } from "@tanstack/react-query"
import { getallProduct, getProductByCategory, getproductbyId } from "./api"


export const GetAllProductQuery = (
  category: string,
  page: number = 1,
  pageSize = 10
)=>{

 const safePage = isNaN(page) || page < 1 ? 1 : page;
  const skip = (safePage - 1) * pageSize; 

  return useQuery({
    queryKey:["products",category, page],
    queryFn:()=> getallProduct({ category, limit: pageSize, skip }),
    
  })
}

export const GetProductBYiDQuery = (id:string)=>{

    return useQuery({
        queryKey:["product",id],
        queryFn:()=> getproductbyId(id),
        
    })
}

export const GetProductByCategoryQuery = (category:string)=>{

    return useQuery({
        queryKey:["product",category],
        queryFn:()=> getProductByCategory(category),
        
    })
}
