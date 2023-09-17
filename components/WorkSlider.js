// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/S-16.jpg',
        },
        {
          title: 'title',
          path: '/S-16y.jpg',
        },
        {
          title: 'title',
          path: '/S-19.jpg',
        },
        {
          title: 'title',
          path: '/S-19y.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/F-16.jpg',
        },
        {
          title: 'title',
          path: '/F-16y.jpg',
        },
        {
          title: 'title',
          path: '/F-18.jpg',
        },
        {
          title: 'title',
          path: '/777.jpg',
        },
      ],
    },
  ],
};

import {Swiper,SiperSlide, SwiperSlide} from 'swiper/react'


import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import{Pagination} from 'swiper'

import {BsArrowRight} from 'react-icons/bs'

import Image from 'next/image'

const WorkSlider = () => {
  return (
   <Swiper 
    spaceBetween={10}
    pagination={{
      clickable:true,
    }}
    modules={[Pagination]}
    className='h-[320px] sm:h-[480px]'
  >
    {workSlides.slides.map((slide,index)=>{
        return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image,index)=>{
                  return( 
                  <div className='relative rounded-lg overflow-hidden flex
                   items-center justify-center group key={index}'>
                    <div className='flex items-center justify-center relative 
                     overflow-hidden group'>
                      {/*image*/}
                      <Image src={image.path} width={700} height={300} alt=''/>
                      {/*overlay gradient*/}
                      <div className='absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#0080FF] to-[#0000E3] opacity-0
                      group-hover:opacity-80 translate-all duration-700'></div>
                      {/*title*/}
                      <div className='absolute bottom-0 translate-y-full 
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20 
                      translate-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13ppx] 
                        tracking-[0.2em]'>
                          {/*title part 1*/}
                          <div className='delay-100'>產品</div>
                          {/*title part 2*/}
                          <div className='translate-y-[500%] 
                          group-hover:translate-y-0 transition-all duration-300 delay-120'>
                            介紹
                            </div>
                          {/*icon*/}
                          <div className='text-xl translate-y-[500%]
                           group-hover:translate-y-0 transition-all duration-300
                           delay-200'>
                            <BsArrowRight />
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

