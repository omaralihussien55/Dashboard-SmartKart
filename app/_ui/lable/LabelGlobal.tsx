import React, { FC } from 'react'

const LabelGlobal:FC<{title:string,info:string}> = ({title,info}) => {
  return (
    <div className='flex flex-col justify-between '>
       <div className='flex  gap-3 p-1 mb-1.5'>
             
            <h3 className='text-gray-800  dark:text-foreground font-bold tracking-widest text-[11px] md:text-sm'>{title}</h3>
             <p className='text-gray-500 dark:text-gray-400   grow text-center  text-[11px] md:text-sm'>{info}</p>
       </div>
       
     <hr/>
    </div>
  )
}

export default LabelGlobal
