import React from 'react'

const Page = async (params) => {
    const keyword = params.keyword
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b37c04a4e6a0f68c76efea44c1f4c273&query=${keyword}language=en-US&include_adult=false`)
    const data = await res.json()
    console.log(data.results, "arama")
    return (
        <div>
            {
                !data?.results ?
                    <div>Aradagınız sonuç Bulunamadı</div> :
                    <div className='flex flex-wrap gap-2 justify-center items-center mt-5 mb-5'>
                        {
                            data?.results?.map((dt, i) => (
                                <Movie dt={dt} key={i} />
                            ))
                        }
                    </div>
            }

        </div>
    )
}

export default Page