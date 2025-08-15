"use client"

import React, { useMemo } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { GetCategoryByUseInfinte } from "@/reactQuery/categories/query"
import { useAppDispatch } from "@/redux/hooks"
import { changeCategory } from "@/redux/slices/CounterSlice"

const Categories = () => {
  const dispatch = useAppDispatch()
  const { data = [] } = GetCategoryByUseInfinte()

  const categories = useMemo(
    () => [{ name: "All", slug: "all", url: "" },...data],
    [data]
  )

  const handleSelect = (slug: string) => {
    dispatch(changeCategory(slug))
  }

  return (
    <div className="w-full px-4 md:px-8 mt-6 ">
      <Carousel opts={{ align: "start" }} className="w-full ">
        <CarouselContent className="gap-2">
          {categories.map((item) => (
            <CarouselItem
              key={item.slug}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 bg-sidebar rounded-md "
               onClick={() => handleSelect(item.slug)}
            >
              
                  <div className="flex items-center justify-center h-16">
                    <span className="font-medium text-center truncate">
                      {item.name}
                    </span>
                  </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Categories
