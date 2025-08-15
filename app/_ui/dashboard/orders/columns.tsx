"use client"

import { ColumnDef } from "@tanstack/react-table"
export type OrderTable = {
  id: string
  discountedTotal: number | string
  total: number | string
  totalProducts: number | string
   totalQuantity: number | string
}


export const Colum = (t:(key:string)=> string): ColumnDef<OrderTable>[] =>{

 const columns: ColumnDef<OrderTable>[] = [
   {
    accessorKey: "id" ,
    header:  "",
  },
  {
    accessorKey: "total" ,
    header:  t("menu.orders.input.total"),
  },
  {
    accessorKey:  "discountedTotal" ,
    header:()=> <div>{t("menu.orders.input.discountedTotal")}</div>,
    cell:({row}) =>{
      const amount = parseFloat(row.getValue("discountedTotal"))
       const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 

      return <div className="font-medium">{formatted}</div>
    }
  },
  {
    accessorKey:"totalProducts",
    header:  t("menu.orders.input.totalProducts"),
  },
  
   {
    accessorKey:"totalQuantity",
    header:  t("menu.orders.input.totalQuantity"),
  },
]



return columns
}
