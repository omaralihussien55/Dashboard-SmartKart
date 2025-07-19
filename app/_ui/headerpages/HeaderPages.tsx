import React, { FC } from 'react'

interface HeaderPagesProps{
    children:React.ReactNode,
    title?:string
}
const HeaderPages:FC<HeaderPagesProps> = ({children,title }) => {
  return (
    <div className='py-3 px-7 border bg-sidebar flex items-center gap-2'>
       {children}
      <div className='grow'></div>
       <h3 className='text-gray-700 font-bold dark:text-foreground '>{title}</h3>
    </div>
  )
}

export default HeaderPages