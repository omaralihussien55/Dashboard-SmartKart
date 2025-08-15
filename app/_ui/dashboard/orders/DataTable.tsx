"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React from "react"
import { useRouter } from "next/navigation"
import Loader from "../../loader/Loader"
import PaginationOrders from "./Pagination"
import { OrderTable } from "./columns"



interface DataTableProps{
  columns: ColumnDef<OrderTable, unknown>[]
  data: OrderTable[],
  totalPages?:number,
  isLoading?:boolean
}

export function DataTable({
  columns,
  data,
  totalPages,
  isLoading
}: DataTableProps) {


  const [sorting, setSorting] = React.useState<SortingState>([])
  const router = useRouter()
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),

        onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div className="w-[95%] md:w-3/4 mx-auto my-4 border rounded-md overflow-hidden shadow-sm bg-sidebar">
 <div className=" borde ">
      <Table   className="relative">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="text-center text-[12px] md:text-sm font-bold" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
        { isLoading? <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                  <Loader />
              </TableCell>
            </TableRow>:<>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="text-center text-[12px] md:text-sm cursor-pointer" key={cell.id}
                  onClick={()=> router.push(`/dashboard/orders/${row.original?.id}`)
                
                }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
         </>}
        </TableBody>
      </Table>

    </div>
    
           <div className="flex items-center justify-end space-x-2 py-4">
            <PaginationOrders totalPage={Number(totalPages)} />
      </div>
    </div>
   
  )
}