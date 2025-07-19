"use client"

import { ColumnDef } from "@tanstack/react-table"
export type Props = {
  name:string,
  slug:string
}


export const Colum = (t:(key:string)=> string): ColumnDef<Props>[] =>{

 const columns: ColumnDef<Props>[] = [
   {
    accessorKey: "slug" ,
    header:  t("menu.category.input.slug"),
  },
  {
    accessorKey: "name" ,
    header:  t("menu.category.input.name"),
  },
 
]



return columns
}
