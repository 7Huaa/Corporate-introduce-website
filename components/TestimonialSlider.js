// testimonial data
const testimonialData = [
  {
    image: '/peo1.png',
    name: '宇正',
    position: 'Customer',
    message:
      '對於我們的家庭而言，這些產品簡直是福音！特別是搖籃，堅固耐用且設計溫馨，寶寶睡得安心舒適。感謝這麼棒的產品！',
  },
  {
    image: '/peo2.png',
    name: '小湘',
    position: 'Customer',
    message:
      '在這裡購買的產品一直都令人滿意。品質出眾，而且客戶服務也非常親切周到。絕對是一個值得信賴的嬰兒搖籃製造商！',
  },
  {
    image: '/peo3.png',
    name: '薇薇',
    position: 'Customer',
    message:
      '我們為能夠找到這麼優秀的製造商感到幸運。他們的產品不僅美觀實用，更讓我們感受到了家的溫馨和安全。推薦給所有新父母！',
  },
];



import {Swiper,SiperSlide, SwiperSlide} from 'swiper/react'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


import{Navigation,Pagination} from 'swiper'

import {FaQuoteLeft} from 'react-icons/fa'

import Image from 'next/image'

const TestimonialSlider = () => {
  return (
   <Swiper 
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation,Pagination]}
    className='h-[400px]'
  >
    {testimonialData.map((person,index)=>{
        return (
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                {/*avatar,name,position*/}
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center 
                items-center relative mx-auto xl:mx-0'>
                  <div className='flex flex-col justify-center text-center'>
                    {/*avatar*/}
                    <div className='mb-2 mx-auto'>
                      <Image src={person.image} width={100} height={100} alt=''/> 
                    </div>
                    {/*name*/}
                    <div className='text-lg'>{person.name}</div>
                    {/*position*/}
                    <div className='text-[12px] uppercase font-extralight tracking-widest'>
                      {person.position}
                      </div>
                  </div>
                </div>
                {/*quote & message*/}
                <div className='flex-1 flex flex-col justify-center 
                before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 
                xl:before:h-[200px] relative xl:pl-20'>
                  {/* quota icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto
                     md:mx-0'/>
                    </div>
                    {/*message*/}
                    <div className='xl:text-lg text-center md:text-left'>
                      {person.message}
                    </div>
                </div>
              </div>
            </SwiperSlide>
            );
          })}
      </Swiper>
  );
};

export default TestimonialSlider;


