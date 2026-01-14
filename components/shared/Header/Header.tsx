import React from 'react'
import Navbar from './Navbar'
import MiddleHeader from './MiddleHeader/MiddleHeader'
import TopBar from './TopHeader/TopBar'
import BottomHeader from './BottomHeader/BottomHeader'


export default function Header() {
  
  return (
    <div className='  sticky top-0 z-50 '>
        <TopBar/>
        {/* <Navbar/> */}
        <MiddleHeader/>
        <BottomHeader/>
    </div>
  )
}
