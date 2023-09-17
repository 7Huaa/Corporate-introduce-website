
import {Swiper,SiperSlide, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


import{FreeMode,Pagination} from 'swiper'

// data
const serviceData = [
  {
    icon: <RxRocket />,
    title: '專業建議與指導',
    description: '提供客戶專業的產品選擇建議 根據客戶需求和喜好 幫助他們做出最適合的選擇',
  },
  {
    icon: <RxRocket />,
    title: '快速配送服務',
    description: '提供迅速的配送選項 確保客戶能夠在最短的時間內收到他們所購買的產品',
  },
  {
    icon: <RxRocket />,
    title: '售後保固與維修',
    description: '產品需要維修時提供相應的支援 確保客戶的產品保持良好的狀態',
  },
  {
    icon: <RxRocket />,
    title: '退換貨政策',
    description: '提供明確的退換貨政策 讓客戶在購買後有信心 並且在必要時可以進行退換貨',
  },
  {
    icon: <RxRocket />,
    title: '電話諮詢',
    description: '如有產品上使用的問題歡迎電話諮詢 確保客戶使用上的品質',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320:{
      slidesPerView:1,
      spaceBetween:15

    },
    640:{
      slidesPerView:3,
      spaceBetween:15
    },

  }}
    freeMode={true}
    pagination={{
      clickable:true,
    }}
    modules={[FreeMode, Pagination]}
    className='h-[290px] sm:h-[340px]'
  >
    {
      serviceData.map((item,index)=>{
        return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8  flex 
              flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,
              169,0.15)] transition-all duration-300'>
                {/*icon*/}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                {/*title 6 desc*/}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>
                {/*arrow*/}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 
                  group-hover:text-accent transition-all duration-300'/>
                </div>
              </div>
            </SwiperSlide>
        );
      })
    }
    Service Slider
    </Swiper>;
};

export default ServiceSlider;
