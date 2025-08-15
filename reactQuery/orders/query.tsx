import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addCart, getorderById, getorders } from "./api"

export const GetOrdersQuery = (  
  page: number = 1,
  pageSize = 10
)=>{
     const safePage = isNaN(page) || page < 1 ? 1 : page;
       const skip = (safePage - 1) * pageSize; 
    return useQuery({
        queryKey:["orders"],
        queryFn:()=> getorders({limit:pageSize,skip})
    })
}

export const GetOrderyByIdQuery = (id:string | undefined)=>{
  return useQuery({
    queryKey:["order",id],
    queryFn:()=> getorderById(id),
    enabled:!!id
  })
}

export const AddCardQuery = ()=>{
  const queryclient = useQueryClient()
  return useMutation({
    mutationKey:['addcart'],
    mutationFn: addCart,
    onSuccess() {
      queryclient.invalidateQueries({queryKey:['order']})
    },
  })
}