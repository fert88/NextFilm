"use client"
import React from 'react'
import { MdLightbulbOutline,MdLightbulb } from "react-icons/md"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeItem = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme,theme, setTheme } = useTheme()
    useEffect(() => {
        setMounted(true)
      }, [])
    const themeMode=theme==="system" ? systemTheme : theme
    console.log(themeMode,"tema rengi")
    return (
        <div className='cursor-pointer'>
            {
                mounted && (themeMode==="dark" ?
                <MdLightbulb onClick={()=>setTheme("light")} size={20} /> :
                <MdLightbulbOutline  onClick={()=> setTheme("dark")} size={20} />)
            }
        </div>

    )
}

export default ThemeItem