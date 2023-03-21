import Movie from '@/components/Movie'
import React from 'react'

const Page =async({searchParams}) => {
  const res=await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=b37c04a4e6a0f68c76efea44c1f4c273&language=en-Us&page=1`,{next: {revalidate:10000}})
  const data=await res.json()
  return (
    <div className='flex flex-wrap gap-2 justify-center items-center mt-5 mb-5'>
        {
          data?.results?.map((dt,i)=>(
            <Movie dt={dt} key={i}/>
          ))
        }
    </div>
  )
}

export default Page