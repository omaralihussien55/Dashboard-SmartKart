"use client"
import React from 'react'
import HeaderPages from '../../headerpages/HeaderPages'
import TableList from './TableList'
import { useTranslation } from 'react-i18next'

const OrderList = () => {
  const {t} = useTranslation()
  return (
    <div>
      <HeaderPages title={t(`menu.orders.title`)}>
        <></>
      </HeaderPages>

      <TableList />
    </div>
  )
}

export default OrderList
