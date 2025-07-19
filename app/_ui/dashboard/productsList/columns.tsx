"use client"

import { ColumnDef } from "@tanstack/react-table"
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}


export const Colum = (t:(key:string)=> string): ColumnDef<Payment>[] =>{

 const columns: ColumnDef<Payment>[] = [
   {
    accessorKey: "sku" ,
    header:  t("menu.products.input.sku"),
  },
  {
    accessorKey: "title" ,
    header:  t("menu.products.input.name"),
  },
  {
    accessorKey:  "price" ,
    header:()=> <div>{t("menu.products.input.price")}</div>,
    cell:({row}) =>{
      const amount = parseFloat(row.getValue("price"))
       const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 

      return <div className="font-medium">{formatted}</div>
    }
  },
  {
    accessorKey:"category",
    header:  t("menu.products.input.category"),
  },
   {
    accessorKey:"thumbnail",
    header: "",
    cell:({row})=>{
         const imgSrc :string = row.getValue("thumbnail")

         return <div className="size-10 rounded-full overflow-hidden border  object-cover">
                   <img src={imgSrc} className="w-full h-full"  alt="" />
         </div>
    }
  },
]



return columns
}
