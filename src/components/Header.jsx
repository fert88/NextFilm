"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import {BiSearch} from "react-icons/bi"
import MenuItem from './MenuItem'
import ThemeItem from './ThemeItem'
const Header = () => {
  const [keyword,setKeyword]=useState("")
  const router=useRouter()
  const menu=[
    {
      name:"About",
      url:"/about"
    },
    {
      name:"Sign In",
      url:"/login"
    }
  ]
  const searchFunc=(e)=>{
    if(e.key==="Enter"&& keyword.length>=4){
      router.push(`/search/${keyword}`)

    }

  }
  return (
    <div className='flex gap-5 px-10 h-14 items-center flex-1 lg:text-lg md:text-base sm:text-sm bg-slate-100 dark:bg-slate-800 p-2'>
      <div className='flec justify-center items-center text-slate-800 dark:text-slate-100 text-sm md:text-lg lg:text-2xl cursor-pointer'>
        FaMa
      </div>
      <div className='flex flex-1 items-center gap-2 bg-white p-1 rounded-md'>
        <BiSearch size={20}/>
        <input type="text" onKeyDown={searchFunc} onChange={e=>setKeyword(e.target.value)} placeholder='Arama Yazınız' className=' flex-1 outline-none bg-transparent' />
      </div>
      <ThemeItem/>
      {
        menu.map((mn,i)=>(
          <MenuItem mn={mn} key={i}/>
        ))
      }
    </div>
  )
}

export default Header