
import React, { useState, useEffect } from 'react';

const url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=8c66b0ec1e8dc59359cce06588eab2bc'

 
export default function Home() {

  const [data, setData] = useState('');

  const fetchData = () => {

    fetch( url ) 
    .then(res => res.json()) 
    .then(data => {
      console.log(data);
      setData(data);
    })
    .catch(err => console.error(err));
  
   };


useEffect(() => {
 
fetchData();
 
}, [])



  return ( 
<>

<div className='space-y-8 p-24 bg-gray-200 min-h-screen antialiased'>

<div className='flex justify-between font-semibold  text-gray-700 '>
<div className=' text-xl'>Recommended</div>
<div className='text-gray-500 '>View More</div>
</div>

<div className='space-x-10 flex text-gray-200 '>

  <div className='h-52 w-60 rounded-3xl shadow-slate-400 shadow-lg bg-green-500 bg-cover ' style={{ backgroundImage: ` url('https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg')` }}>
    <div className='mt-32 mx-4'>
    <div className='font-semibold tracking-wider'>{data.results[0].name}</div>
    <div className='font-light text-sm'>{data.results[0].first_air_date}</div>
    </div>
  </div>

  <div className='h-52 w-60 rounded-3xl bg-green-500 bg-cover shadow-slate-400 shadow-lg' style={{ backgroundImage: ` url('https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg')` }}>
    <div className='mt-32 mx-4'>
    <div className='font-semibold tracking-wider'>{data.results[1].name}</div>
    <div className='font-light text-sm'>{data.results[1].first_air_date}</div>
    </div>
  </div>
  <div className='h-52 w-60 rounded-3xl bg-green-500 bg-cover shadow-slate-400 shadow-lg' style={{ backgroundImage: ` url('https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg')` }}>
    <div className='mt-32 mx-4'>
    <div className='font-semibold tracking-wider'>{data.results[2].name}</div>
    <div className='font-light text-sm'>{data.results[2].first_air_date}</div>
    </div>
  </div>

 <div className='h-52 w-60 rounded-3xl bg-green-500 bg-cover shadow-slate-400 shadow-lg' style={{ backgroundImage: ` url('https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg')` }}>
    <div className='mt-32 mx-4'>
    <div className='font-semibold tracking-wider'>{data.results[3].name}</div>
    <div className='font-light text-sm'>{data.results[3].first_air_date}</div>
    </div>
  </div>

  </div>
</div>

</>

  )
}
