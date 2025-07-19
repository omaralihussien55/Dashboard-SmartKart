"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { GetCategoryByUseInfinte } from "@/reactQuery/categories/query"
import React from 'react'
import { useTranslation } from "react-i18next"

const SelectCategory = () => {
      const {t} = useTranslation()
      const { data} = GetCategoryByUseInfinte()

  return (
    <div className="grid gap-2">
        <label>{t("menu.products.input.category")}</label>
        <Select >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>

      <SelectContent  className=" overflow-y-auto">
        {data?.map((item:{name:string,slug:string,url:string}) => (
          <SelectItem key={item.name} value={item.name}>
            {item.name}
          </SelectItem>
        ))} 
      </SelectContent>
    </Select>
      
    </div>
  )
}

export default SelectCategory
