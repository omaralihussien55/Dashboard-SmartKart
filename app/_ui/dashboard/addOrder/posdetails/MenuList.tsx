"use client"
import React from 'react'
import dynamic from "next/dynamic";

const Categories = dynamic(
  () => import("./Categories"),
  { ssr: false }
);

const Products = dynamic(
  () => import("./Products"),
  { ssr: false }
);
const MenuList = () => {
  return (
    <div className=''>
        <Categories />
        <Products />
      
    </div>
  )
}

export default MenuList
