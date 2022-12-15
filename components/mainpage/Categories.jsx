
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

 
export default function Home() {


  return ( 
<>

 <div className='space-y-8 px-5  antialiased'>

  <div className='flex justify-between font-semibold text-blue-700 '>
<div className=' text-3xl'>Categories</div>
</div>


<Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={5}
        grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="flex space-x-2">
          <div className='h-60 w-1/3  rounded-2xl bg-green-500 bg-cover shadow-slate-400 shadow-lg' style={{ backgroundImage: ` url('https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')` }}>
    <div className=''>
    <div className='font-semibold tracking-wider'>{}</div>
    <div className='font-light text-sm'>{}</div>
    </div>
  </div>

  <div className='h-60 w-1/3  rounded-2xl bg-green-500 bg-cover shadow-slate-400 shadow-lg' style={{ backgroundImage: ` url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')` }}>
    <div className=''>
    <div className='font-semibold tracking-wider'>{}</div>
    <div className='font-light text-sm'>{}</div>
    </div>
    </div>

    <div className='h-60 w-1/3 rounded-2xl bg-green-500 bg-cover shadow-slate-400 shadow-lg' style={{ backgroundImage: ` url('https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80')` }}>
    <div className=''>
    <div className='font-semibold tracking-wider'>{}</div>
    <div className='font-light text-sm'>{}</div>
    </div>
  </div>

  </SwiperSlide>

        <SwiperSlide className="flex space-x-2" >  
          
          <div className='h-60 w-1/3  rounded-2xl bg-green-500 bg-cover shadow-slate-400 shadow-lg' style={{ backgroundImage: ` url('https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')` }}>
    <div className=''>
    <div className='font-semibold tracking-wider'>{}</div>
    <div className='font-light text-sm'>{}</div>
    </div>
  </div>

  <div className='h-60 w-1/3  rounded-2xl bg-green-500 bg-cover shadow-slate-400 shadow-lg' style={{ backgroundImage: ` url('https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')` }}>
    <div className=''>
    <div className='font-semibold tracking-wider'>{}</div>
    <div className='font-light text-sm'>{}</div>
    </div>
  </div>

  <div className='h-60 w-1/3  rounded-2xl bg-green-500 bg-cover shadow-slate-400 shadow-lg' style={{ backgroundImage: ` url('https://images.unsplash.com/photo-1612887726773-e64e20cf08fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')` }}>
    <div className=''>
    <div className='font-semibold tracking-wider'>{}</div>
    <div className='font-light text-sm'>{}</div>
    </div>
  </div>
  
  </SwiperSlide>

        <SwiperSlide>
          <div className='h-60 w-1/3 rounded-2xl bg-green-500 bg-cover shadow-slate-400 shadow-lg' style={{ backgroundImage: ` url('https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80')` }}>
    <div className=''>
    <div className='font-semibold tracking-wider'>{}</div>
    <div className='font-light text-sm'>{}</div>
    </div>
  </div>
  </SwiperSlide>

        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

</div>

</>

  )
}
