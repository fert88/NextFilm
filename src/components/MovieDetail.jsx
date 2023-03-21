import React from 'react'
import Image from "next/image"

const MovieDetail = ({ movieDetail }) => {
  return (
    <div>
      <div className='text-3xl bg-slate-300 flex flex-1 justify-center items-center h-15 p-5'>
        {movieDetail.title}
      </div>
      <div className='flex gap-2'>
        <div className='flex justify-center gap-2 w-1/2 h-[500] p-1 relative'>
          <Image width={500} height={750} className="object-cover" src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path || movieDetail.poster_path}`} />
        </div>
        <div className='flex flex-wrap w-1/2 items-center justify-center'>
          <div className='w-full '>
            <span className='text-lg text-black font-bold'>Overview:</span> {movieDetail.overview}
          </div>
          <div className='w-full '>
            <span className='text-lg text-black font-bold'>Release Date:</span> {movieDetail.release_date}
          </div>
          <div className='w-full '>
            <span className='text-lg text-black font-bold'>Rating:</span> {(movieDetail.vote_average).toFixed(1)}
          </div>

        </div>

      </div>
    </div>

  )
}

export default MovieDetail