import React from 'react'
import ThemeProvider from '../themes/ThemeProvider'
import Notification from './Notification'
import Personal from './Personal'
import LanguageToggle from './LangugeToggle'

const GroupNotfyTheme = () => {
  return (
    <div className='flex items-center justify-between gap-3'>
    <div className='flex items-center gap-2'>
      <ThemeProvider />
      <Notification />
        </div>
       <div className='grow'></div>
       <LanguageToggle/>
      <Personal />
    </div>
  )
}

export default GroupNotfyTheme
