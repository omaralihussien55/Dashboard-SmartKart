"use client"
import { Button } from '@/components/ui/button'
import React, {  useEffect, useState } from 'react'

const ThemeProvider = () => {
    const [theme,setTheme] = useState("light")

    useEffect(()=>{
         const saved = localStorage.getItem("theme") || "light";
         setTheme(saved)
         document.body.classList.toggle("dark",saved === "dark")
    },[])

    const toggle = ()=>{
        const newThem = theme === "light"?"dark":"light"
        setTheme(newThem)
        document.body.classList.toggle("dark",newThem === "dark")
        localStorage.setItem("theme",newThem)
    }
  return (
    <Button
     onClick={toggle}
     className=" size-10 border rounded-full bg-transparent"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </Button>
  )
}

export default ThemeProvider
