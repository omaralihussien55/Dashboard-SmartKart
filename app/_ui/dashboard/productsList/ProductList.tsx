"use client"
import React from 'react'
import { Formik } from "formik"
import { z } from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter"
import {toast} from "sonner"
import { useTranslation } from 'react-i18next'
import TableList from './TableList'
import SelectCategory from './selectCategory'
import HeaderPages from '../../headerpages/HeaderPages'
import DialogDemo from '../../Dailogs/DailoComponent'
import FormComponent from '../../forms/FormComponet'
const initialValues ={
name:"",
price:0,
description:""
}
const validationSchema = z.object({
  name: z.string().min(2, "Name too short"),
  price: z
    .number({ invalid_type_error: "Price is required and must be a number" })
    .min(0, "Price must be a positive number"),
  description:z.string().min(2,"description too short")
})


const ProductList = () => {
  const {t} = useTranslation()
  return (
    <div>
      <HeaderPages title={t("menu.products.title")}>
         <DialogDemo titlebtn={t("menu.products.btn.add")} title='' form="addproduct">
     <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(validationSchema)}
      onSubmit={()=>{
            toast.success("Product saved successfully!")
      }}
      >

        {({ values,errors,handleBlur,  handleSubmit,handleChange}) => (
              <form onSubmit={handleSubmit} id='addproduct'>
            <div className='grid gap-4'>
                     
            <FormComponent label={t("menu.products.input.name")} id='name' name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} error={errors.name}    />
            <FormComponent label={t("menu.products.input.price")} id='price' name='price' type='number' onChange={handleChange} onBlur={handleBlur} value={values.price} error={errors.price}  />
            <SelectCategory/>
            <FormComponent label={t("menu.products.input.description")} id='description' name='description' onChange={handleChange} onBlur={handleBlur} value={values.description} error={errors.description}  />
          
                </div>

              </form>

         )}
         </Formik>
         </DialogDemo>
      </HeaderPages>

          <TableList />
    </div>
  )
}

export default ProductList
