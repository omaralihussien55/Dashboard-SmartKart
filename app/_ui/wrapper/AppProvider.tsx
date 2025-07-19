"use client"

import i18n from '@/lib/i18n'
import { useAppSelector } from '@/redux/hooks'
import React, { FC, useEffect } from 'react'

const AppProvider:FC<{children:React.ReactNode}> = ({children}) => {

     const {lang} = useAppSelector(state=> state.cart)
     console.log(lang)
  useEffect(()=>{
const language = typeof window !== "undefined" ? localStorage.getItem("i18nextLng") || "en" : "en"

    const islang = lang ? "en":"ar"
    i18n.changeLanguage(islang)
    localStorage.setItem("i18nextLng", islang)
    
    document.documentElement.lang = islang
    document.documentElement.dir = islang === "ar" ? "rtl" : "ltr"
  
  },[lang])
  return (
    <div>
      {children}
    </div>
  )
}

export default AppProvider
