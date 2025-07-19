"use client"
import { useTranslation } from "react-i18next"


export function I18nProviderWrapper({ children }: { children: React.ReactNode }) {
      const { ready } = useTranslation()

  if (!ready) return null
  return (
    <div>
      {children}
    </div>
  )
}
