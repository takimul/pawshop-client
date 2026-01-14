"use client"
import { useColorClasses } from '@/lib/styles';
import React, { useState } from 'react'
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';

function SearchInput() {
    const [search, setSearch] =useState("");
    const { bgMiddleBar} = useColorClasses();


  return (
    <div className='md:inline-flex flex-1 h-10 relative'>
        <input type="text" placeholder='Search products here...' className={`w-full h-full border-2 border-[#237803] outline-none rounded-2xl  px-4 text-white/70 `}
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        {search && (
        <RiCloseLine
        onClick={()=>setSearch("")}
        className='text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200'/>
        )}
        <span className={`w-10 h-10 inline-flex items-center justify-center text-white absolute right-0 top-0 rounded-r-2xl border-[#237803] hover:bg-[#1c5807] cursor-pointer duration-200  ${bgMiddleBar}`}>
            <RiSearchLine/>
        </span>
    </div>
  )
}

export default SearchInput