import Link from 'next/link'
import React from 'react'
import {BsTwitter,BsInstagram,BsFacebook,BsYoutube} from "react-icons/bs"

const Footer = () => {
  const menu=[
    {
      name:"Anasayfa",
      url:""
    },
    {
      name:"Film",
      url:""
    },
    {
      name:"Dizi",
      url:""
    }
  ]

  return (
    <div className='dark:bg-slate-700 fixed bottom-0 bg-slate-200 p-3 flex flex-wrap gap-3 items-center justify-center min-h-[200px] w-full'>
      <div className='flex justify-center items-center gap-3 w-full'>
        <div className='text-2xl p-2 hover:scale-125 cursor-pointer hover:transition'>
          <BsTwitter/>
        </div>
        <div className='text-2xl p-2 hover:scale-125 cursor-pointer hover:transition'>
          <BsInstagram/>
        </div>
        <div className='text-2xl p-2 hover:scale-125 cursor-pointer hover:transition'>
          <BsFacebook/>
        </div>
        <div className='text-2xl p-2 hover:scale-125 cursor-pointer hover:transition'>
          <BsYoutube/>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 w-full text-2xl">
        {
          menu.map((a,i)=>(
            <Link href={a.url}  >
            {a.name}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Footer