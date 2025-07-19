"use client"
import React from 'react'
import { Formik } from "formik"
import { z } from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter"
import {toast} from "sonner"
import { useTranslation } from 'react-i18next'
import TableList from './TableList'
import HeaderPages from '../../headerpages/HeaderPages'
import DialogDemo from '../../Dailogs/DailoComponent'
import FormComponent from '../../forms/FormComponet'
const initialValues ={
name:"",
slug:""
}
const validationSchema = z.object({
  name: z.string().min(2, "Name too short"),
  description:z.string().min(1,"description too short")
})


const CategoryList = () => {
  const {t} = useTranslation()
  return (
    <div>
      <HeaderPages title={t("menu.category.title")}>
         <DialogDemo titlebtn={t("menu.category.btn.add")} title='' form="addproduct">
     <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(validationSchema)}
      onSubmit={()=>{
            toast.success("Product saved successfully!")
      }}
      >

        {({ values,errors,handleBlur,  handleSubmit,handleChange}) => (
              <form onSubmit={handleSubmit} id='addcategory'>
            <div className='grid gap-4'>
                     
            <FormComponent label={t("menu.category.input.name")} id='name' name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} error={errors.name}    />
            <FormComponent label={t("menu.category.input.slug")} id='slug' name='slug'  onChange={handleChange} onBlur={handleBlur} value={values.slug} error={errors.slug}  />
           
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

export default CategoryList
