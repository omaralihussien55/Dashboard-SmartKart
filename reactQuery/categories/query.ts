import { useQuery } from "@tanstack/react-query"
import { getcategoryInfint } from "./api";




export const GetCategoryByUseInfinte = ()=>{
  return useQuery({
    queryKey: ["cateorys"],
    queryFn: getcategoryInfint,
 
  });
}