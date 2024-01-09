import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const Earthslide = () => {
    return (
        <>
            <div className='w-1/2'></div>
            <div className='w-6/12'>
                <Swiper
                    navigation={true}
                    effect={'cards'}
                    slidesPerView={3}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper "
                >
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-red-500'>Slide 1</SwiperSlide>
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-black'>Slide 2</SwiperSlide>
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-orange-500'>Slide 3</SwiperSlide>
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-yellow-500'>Slide 4</SwiperSlide>
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-red-500'>Slide 1</SwiperSlide>
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-black'>Slide 2</SwiperSlide>
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-orange-500'>Slide 3</SwiperSlide>
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-yellow-500'>Slide 4</SwiperSlide>
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-red-500'>Slide 1</SwiperSlide>
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-black'>Slide 2</SwiperSlide>
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-orange-500'>Slide 3</SwiperSlide>
                    <SwiperSlide className=' max-w-[400px] mx-auto min-h-[400px] bg-yellow-500'>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
export default Earthslide