"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { useAppDispatch,useAppSelector } from "@/redux/hooks"
import { changeLang } from "@/redux/slices/CounterSlice"

export default function LanguageToggle() {
  const { t } = useTranslation()
const {lang} = useAppSelector(state=> state.cart)
const dispatch = useAppDispatch()
  const toggleLanguage = () => {
    dispatch(changeLang(!lang))
  }

  return <div className="border size-10 rounded-full text-gray-500 flex items-center justify-center cursor-pointer" onClick={toggleLanguage}>{t("btns.switch")}</div>
}
