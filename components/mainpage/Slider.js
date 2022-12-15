import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';



export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
      
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <div className=' w-full h-96 shadow-slate-400 shadow-lg bg-green-500 bg-cover ' style={{ backgroundImage: ` url('https://img.freepik.com/free-vector/superhero-animals-lion-wolf-giving-interview_107791-9632.jpg?w=1060&t=st=1671003307~exp=1671003907~hmac=aa16542b59a6a971d9528e81bd11afcf93897232460793c213c9e6314e2981f9')` }}>
    <div className=''>
    <div className='font-semibold tracking-wider'>{}</div>
    <div className='font-light text-sm'>{}</div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide> <div className=' w-full h-96 shadow-slate-400 shadow-lg bg-green-500 bg-cover ' style={{ backgroundImage: ` url('https://img.freepik.com/free-vector/log-bridge-mountains-cliff-rock-peaks-landscape-with-waterfall-trees-background-beautiful-scenery-nature-view-beam-bridgework-connect-rocky-edges-cartoon-vector-illustration_107791-4568.jpg?w=1060&t=st=1671003337~exp=1671003937~hmac=7ad453e0a57bf9800fcfdd25f4d0652e63d73f8a5b0b709bf9badbf9015f6185')` }}>
    <div className=''>
    <div className='font-semibold tracking-wider'>{}</div>
    <div className='font-light text-sm'>{}</div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide> <div className=' w-full h-96 shadow-slate-400 shadow-lg bg-green-500 bg-cover ' style={{ backgroundImage: ` url('https://img.freepik.com/free-vector/clothes-store-facade-apparel-shop-with-mannequins_107791-15974.jpg?w=1060&t=st=1671003389~exp=1671003989~hmac=0cfff4538a18e77ae89de72066ff0d141fc1d78d83c7a15fec02ce1180132d18')` }}>
    <div className=''>
    <div className='font-semibold tracking-wider'>{}</div>
    <div className='font-light text-sm'>{}</div>
    </div>
  </div>
</SwiperSlide>
        
      </Swiper>
    </>
  );
}
