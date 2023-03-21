"use client"
import React from 'react'
import Link from 'next/link'
import {useSearchParams} from "next/navigation"
const Tabs = () => {
    const searchParams=useSearchParams()
    const genre=searchParams.get("genre")
    console.log(genre,"link adi")
    const tabs=[
        {
            name:"En Populer",
            url: "popular"
        },
        {
            name:"En Begenilenler",
            url: "top_rated"
        },
        {
            name:"Yakında Gelecekler",
            url: "upcoming"
        }
    ]
  return (
    <div className=' p-5 flex justify-center items-center gap-7 bg-slate-50 dark:bg-slate-700'>
           {tabs.map((tab,i)=>(
            <Link className={`cursor-pointer hover:opacity-80 hover:transition-opacity ${tab.url===genre ? "underline underline-offset-8 text-slate-500":""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
           ))
}
    </div>
  )
}

export default Tabs