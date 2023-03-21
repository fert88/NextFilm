"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Movie = ({ dt }) => {
  const router=useRouter()
  return (
    <div onClick={()=>router.push(`/movie/${dt?.id}`)} className='flex p-2 bg-slate-200 dark:bg-slate-800 rounded-md gap-1 flex-wrap cursor-pointer relative hover:opacity-50 hover:transition-opacity w-[300px] h-[300px] md:h-[350px]'>
      <div className='flex justify-center items-center '>
        <Image width={300} height={200} src={`https://image.tmdb.org/t/p/original/${dt.backdrop_path || poster_path}`} />
      </div>
      <div className='w-full p-5 flex-wrap '>
        <div className='flex text-base md:text-xl lg:text-2xl'>
          {dt?.title}
        </div>
        <div className=' flex text-sm md:text-lg lg:text-xl'>
          {dt?.vote_average}
        </div>
        <div className='flex text-sm md:text-lg lg:text-xl'>
          {dt?.release_date}
        </div>
      </div>
    </div>
  )
}

export default Movie