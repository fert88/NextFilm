import React from 'react'

import MovieDetail from '@/components/MovieDetail'
const getMovie=async(id)=>{
  const res=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b37c04a4e6a0f68c76efea44c1f4c273`)
  return await res.json()
}
const Page = async({params}) => {
  const data=params.id 
  const movieDetail=await getMovie(data)
  console.log(movieDetail,"film detayı")

  return (
    <MovieDetail movieDetail={movieDetail} key={data}/>
    
  )
}

export default Page