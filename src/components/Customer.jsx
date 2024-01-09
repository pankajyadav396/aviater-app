import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Map from "../assets/images/customer-img.png"
import Slider from 'react-slick';
import jaylon from "../assets/images/jaylon-img-slider.png"
import jaylon2 from "../assets/images/jaylon-2.png"
import jaylon3 from "../assets/images/jaylon-3.png"
import stars from "../assets/images/stars-img.png"

const NextArrow = ({ onClick }) => {
    return (
        <button className="w-[50px] group h-[50px] left-[38%] bg-indigo-600 bg-opacity-10 transition-all flex items-center justify-center bottom-[-30%] absolute  hover:bg-indigo-600 rounded-full hover:shadow-[2px_10px_30px_0px_#313EF7]" onClick={onClick}>
            <svg className=' stroke-black rotate-180 group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                <path d="M0.916748 21L10.9167 11L0.91675 0.999999" stroke-width="2" />
            </svg>
        </button>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <button className="w-[50px] group h-[50px] bg-indigo-600 bg-opacity-10 transition-all left-[55%] flex items-center justify-center bottom-[-30%] absolute  hover:bg-indigo-600 rounded-full hover:shadow-[2px_10px_30px_0px_#313EF7]" onClick={onClick}>
            <svg className=' stroke-black group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                <path d="M0.916748 21L10.9167 11L0.91675 0.999999" stroke-width="2" />
            </svg>
        </button>
    );
};
const Customer = () => {
    var settings = {
        prevArrow: <NextArrow />,
        nextArrow: <PrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variablewidth: true,
        centerPadding: "0px"
    };
    return (
        <div>
            <div className='max-w-[1200px] px-3 mx-auto pb-[100px]'>
                <p className='max-w-[524px] mx-auto text-center text-indigo-600 mb-2 text-xl font-semibold font-["Montserrat"] leading-normal'>What’s our customer saying</p>
                <p className="max-w-[534px] mx-auto mb-[60px] text-center text-slate-900 sm:text-[40px] text-[25px] font-bold font-['Montserrat'] capitalize leading-[30px] sm:leading-[60px] tracking-wide">Our Customer Feedback</p>
                <div className=' grid grid-cols-1 lg:grid-cols-9 w-full mx-[-12px] '>
                    <div className='lg:col-span-5  px-3'>
                        <img className='w-full' src={Map} alt="world-map" />
                    </div>
                    <div className='lg:col-span-4 mt-9 lg:mt-0'>
                        <Slider {...settings}>
                            <div className=' max-w-[500px] ml-3 sm:ml-0 flex w-full flex-col rounded-3xl shadow-lg'>
                                <div className='py-[30px] px-5'>
                                    <div className=' flex items-center gap-4'>
                                        <img src={jaylon2} alt="image" />
                                        <div className='flex flex-col'>
                                            <p className="opacity-90 text-slate-900 text-xl font-semibold font-['Montserrat'] leading-normal">Jaylon Vaccaro</p>
                                            <img src={stars} alt="" />
                                        </div>
                                    </div>
                                    <p className="text-zinc-900 sm:text-lg text-base  text-start font-medium font-['Montserrat'] leading-[24px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                                </div>
                            </div>
                            <div className=' max-w-[500px] flex w-full sm:ml-0 flex-col rounded-3xl shadow-lg'>
                                <div className='py-[30px] px-5'>
                                    <div className=' flex items-center gap-4'>
                                        <img src={jaylon3} alt="image" />
                                        <div className='flex flex-col'>
                                            <p className="opacity-90 text-slate-900 text-xl font-semibold font-['Montserrat'] leading-normal">Jaylon Vaccaro</p>
                                            <img src={stars} alt="" />
                                        </div>
                                    </div>
                                    <p className="text-zinc-900 sm:text-lg text-base  text-start font-medium font-['Montserrat'] leading-[24px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                                </div>
                            </div>
                            <div className=' max-w-[500px] flex w-full sm:ml-0 flex-col rounded-3xl shadow-lg'>
                                <div className='py-[30px] px-5'>
                                    <div className=' flex items-center gap-4'>
                                        <img src={jaylon} alt="image" />
                                        <div className='flex flex-col'>
                                            <p className="opacity-90 text-slate-900 text-xl font-semibold font-['Montserrat'] leading-normal">Jaylon Vaccaro</p>
                                            <img src={stars} alt="" />
                                        </div>
                                    </div>
                                    <p className="text-zinc-900 sm:text-lg text-base  text-start font-medium font-['Montserrat'] leading-[24px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                                </div>
                            </div>
                            <div className=' max-w-[500px] flex w-full sm:ml-0 flex-col rounded-3xl shadow-lg'>
                                <div className='py-[30px] px-5'>
                                    <div className=' flex items-center gap-4'>
                                        <img src={jaylon2} alt="image" />
                                        <div className='flex flex-col'>
                                            <p className="opacity-90 text-slate-900 text-xl font-semibold font-['Montserrat'] leading-normal">Jaylon Vaccaro</p>
                                            <img src={stars} alt="" />
                                        </div>
                                    </div>
                                    <p className="text-zinc-900 sm:text-lg text-base  text-start font-medium font-['Montserrat'] leading-[24px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Customer