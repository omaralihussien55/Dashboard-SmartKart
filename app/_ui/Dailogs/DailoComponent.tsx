"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FC, useState } from "react"
import { useTranslation } from "react-i18next"
interface DialogDemoProps{
children:React.ReactNode,
title?:string,
description?:string,
 titlebtn?:string,
 form:string
}
const  DialogDemo:FC<DialogDemoProps> =({children,titlebtn,title,description,form})=> {
    const [open, setOpen] = useState(false)
    const {t} = useTranslation()
  return (
    <div className="">
    <Dialog    open={open} onOpenChange={(isOpen) => {
        if (isOpen) setOpen(true)
      }}>
      
        <DialogTrigger asChild>
          <Button variant="outline"  onClick={() => setOpen(true)}>{titlebtn}</Button>
        </DialogTrigger>
      
        <DialogContent className="sm:max-w-[425px] p-0 shadow-lg " onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader className="p-3">
            <DialogTitle className="text-center">{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className=" max-h-72 overflow-y-scroll px-3 py-2">
               {children}
          </div>
          <DialogFooter className="p-2">
            <DialogClose asChild>
              <Button variant="outline" onClick={()=> setOpen(false)}>{t("btns.cancel")}</Button>
            </DialogClose>
            <Button type="submit" form={form} >{t("btns.save")}</Button>
          </DialogFooter>
          
              </DialogContent>

    </Dialog>
    </div>
  )
}
 
export default DialogDemo