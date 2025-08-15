import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-sidebar p-2'>
      <ul className='flex items-center gap-3 justify-center'>
        <li>
            <Link href={"/dashboard/orders"}>orders</Link>
        </li>
         <li>
            <Link href={"/dashboard/orders"}>bills</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
