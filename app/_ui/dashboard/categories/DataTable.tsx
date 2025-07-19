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
import { Button } from "@/components/ui/button"

type Category = {
  name: string;
  slug: string;
}

interface DataTableProps<Category, _> {
  columns: ColumnDef<Category, unknown>[]
  data: Category[],
  totalPages?:number,
  isLoading?:boolean
}

export function DataTable<TData, _>({
  columns,
  data,
  isLoading
}: DataTableProps<Category, unknown>) {
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
                key={row.original.slug}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="text-center text-[12px] md:text-sm cursor-pointer" key={row.original.slug}
                  onClick={()=> router.push(`/dashboard/categories/${row.original.slug}`)}
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


{/* ✅ Pagination UI */}
<div className="flex items-center justify-between px-4 py-2 border-t">
  {/* ⇤ Pagination Controls */}
  <div className="flex gap-2 items-center">
    <Button
      variant="outline"
      size="sm"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      ⬅ السابق
    </Button>

    <Button
      variant="outline"
      size="sm"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      التالي ➡
    </Button>
  </div>

  {/* 🔢 Page Info */}
  <div className="text-sm text-muted-foreground">
    الصفحة{" "}
    <span className="font-medium">{table.getState().pagination.pageIndex + 1}</span> من{" "}
    <span className="font-medium">{table.getPageCount()}</span>
  </div>

  {/* 🔽 Page Size Selector */}
  <div className="flex items-center gap-2">
    <span className="text-sm">عدد العناصر:</span>
    <select
      value={table.getState().pagination.pageSize}
      onChange={(e) => table.setPageSize(Number(e.target.value))}
      className="border text-sm rounded-md px-2 py-1"
    >
      {[5, 10, 20, 50].map((size) => (
        <option key={size} value={size}>
          {size}
        </option>
      ))}
    </select>
  </div>
</div>

    
    </div>
   
  )
}