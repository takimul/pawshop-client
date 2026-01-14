import Link from 'next/link'
import React from 'react'
import { LiaShoppingCartSolid } from 'react-icons/lia'
import { MdFavoriteBorder } from 'react-icons/md'

const MiddleHeaderIcons = () => {
  return (
    <>
    <Link href={"/favorite"} className='text-2xl relative'>
        <MdFavoriteBorder className='text-white'/>
        <span className='absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 text-white bg-red-600 rounded-full flex items-center justify-center'>
            0
        </span>
    </Link>
    <Link href={"/cart"} className='text-3xl relative'>
        <LiaShoppingCartSolid  className='text-white'/>
        <span className='absolute -top-0.5 -right-1 text-[10px] font-medium w-4 h-4 text-white bg-red-600 rounded-full flex items-center justify-center'>
            0
        </span>
    </Link>
    </>
  )
}

export default MiddleHeaderIcons