import card1 from "../assets/images/card-1.png"
import cardline from "../assets/images/card-line.png";
import earthimg from "../assets/images/img-earth.png";
import smallaero from "../assets/images/smallaero.png";
import barcode from "../assets/images/barcode.png";

const Swipcardsec = () => {
    return (
        <div className='bg-[#010223] pt-[100px] pb-[100px] overflow-hidden'>
            <div className=' max-w-[1110px] px-3 mx-auto'>
                <div className=' flex flex-row flex-wrap -mx-3'>
                    <div className=' w-full md:w-1/2 px-3'>
                        <div className=' font-[montserrat] text-[32px] sm:text-[40px] text-[#FFF] font-bold leading-[normal ] sm:leading-[150%] tracking-[0.6px] text-center md:text-start'>Book Popular Flight Tickets</div>
                        <p className=' font-[montserrat] text-[14px] sm:text-base text-[#ffffffa6] leading-[normal] sm:leading-[150%] font-normal pt-[10px] xs:pt-[16px] text-center md:text-start'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <img src={earthimg} alt="earth" className=' max-w-[315px] max-h-[315px] md:pt-6 mx-auto md:mx-0' />
                    </div>
                    <div className='relative w-full z-30 md:w-1/2 px-3 flex flex-col lgg:flex-row lgg:justify-between gap-4  md:gap-[80px] lgg:gap-[unset] '>
                        <div className=' bg-[#FFFFFF] px-[12px] xs:px-[17px] py-[20px] xs:py-[30px] rounded-[30px] max-w-[390px] border-[unset]  overflow-hidden xxs:mx-auto md:mx-0 -mt-4'>
                            <div className=' flex flex-wrap flex-row -mx-3 px-[13px]'>
                                <div className=' w-1/2 px-3'>
                                    <button className='text-[#313EF7] font-[montserrat] text-[10px] xxs:text-[14px] sm:text-[16px] font-medium p-[8px_10px] rounded-[49px] bg-[#313ef71a] '>Economy Saver</button>
                                    <p className=' text-[#030522] text-[13px] sm:text-base font-bold font-[montserrat] leading-[normal] xss:leading-[150%] mt-[24px]'>6 Flight Tickets</p>
                                    <p className=' text-[#9CA3AF] text-[12px] sm:text-[14px] font-medium font-[montserrat] leading-[normal] xxs:leading-[150%] pt-[24px]'>Passenger</p>
                                    <p className=' text-[#030522] text-[13px] sm:text-[16px] font-[montserrat] font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Raju Mullah</p>
                                    <p className=' text-[#9CA3AF] text-[12px] sm:text-[14px] font-medium font-[montserrat] leading-[normal] xxs:leading-[150%] pt-[16px]'>Flight</p>
                                    <p className=' text-[#030522] text-[13px] sm:text-[16px] font-[montserrat] font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>#5486626661</p>
                                    <p className=' text-[#9CA3AF] text-[12px] sm:text-[14px] font-medium font-[montserrat] leading-[normal] xxs:leading-[150%] pt-[16px]'>Class</p>
                                    <p className=' text-[#030522] text-[13px] sm:text-[16px] font-[montserrat] font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Economy</p>
                                </div>
                                <div className=' w-1/2 px-3'>
                                    <div className=' flex items-center gap-[7.5px] justify-end'><p className=' text-[#030522] text-[14px] sm:text-[16px] font-[montserrat] font-semibold'>UK</p>
                                        <img src={smallaero} alt="smallaero" />
                                        <p className=' text-[#030522] text-[14px] sm:text-[16px] font-[montserrat] font-semibold'>BD</p>
                                    </div>
                                    <p className=' text-[#9CA3AF] text-[12px] sm:text-[14px] font-medium font-[montserrat] leading-[normal] xxs:leading-[150%] pt-[60px] sm:pt-[80px]'>Date</p>
                                    <p className=' text-[#030522] text-[13px] sm:text-[16px] font-[montserrat] font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 Nov 2022</p>
                                    <p className=' text-[#9CA3AF] text-[12px] sm:text-[14px] font-medium font-[montserrat] leading-[normal] xxs:leading-[150%] pt-[16px]'>Gate</p>
                                    <p className=' text-[#030522] text-[13px] sm:text-[16px] font-[montserrat] font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 A</p>
                                    <p className=' text-[#9CA3AF] text-[12px] sm:text-[14px] font-medium font-[montserrat] leading-[normal] xxs:leading-[150%] pt-[16px]'>Seats</p>
                                    <p className=' text-[#030522] text-[13px] sm:text-[16px] font-[montserrat] font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>5B - 11B</p>
                                </div>
                            </div>
                            <div className='pt-[108px] sm:pt-[90px]'><img src={cardline} alt="cardline" /></div>
                            <div className='pt-[47px] max-w-[356px] overflow-hidden'><img src={barcode} alt="barcode" /></div>
                            <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] left-[-5%]'></div>
                            <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] right-[-5%]'></div>

                        </div>
                        <div className='absolute z-10   top-[60px] left-[70px] w-[330px] h-[505px] block'><img className="w-full" src={card1} alt="card-1" /></div>
                        <div className='absolute z-10   top-[40px] left-[50px] w-[330px] h-[505px] block'> <img className="w-full" src={card1} alt="card-1" /></div>
                        <div className='absolute  z-10  top-[20px] left-[30px] w-[330px] h-[505px] block'><img className="w-full" src={card1} alt="card-1" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Swipcardsec



// import React from "react";
// import worldairplane from "../assets/images/Air-Delivery.webp";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import flight_img from "../assets/images/flight-img.png";
// const Earth = () => {
//     const first = React.useRef(null);
//     const settings = {
//         dots: true,
//         arrows: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         fade: true,

//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 640,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     fade: false,
//                 },
//             },
//         ],
//     };
//     return (
//         <div className="bg-[#010223] overflow-hidden">
//             <div className=" max-w-[1040px] mx-auto px-3 pt-[50px] pb-[100px]">
//                 <div className=" flex flex-wrap flex-row -mx-3">
//                     <div className="lg:w-1/2 w-full px-3">
//                         <h2 className=" text-white sm:text-[40px] text-2xl font-bold sm:leading-[60px] leading-[30px] tracking-[0.6px]  uppercase lg:max-w-[496px]">
//                             Book Popular Flight Tickets
//                         </h2>
//                         <p className="text-[#A6A7B2]  text-base font-normal leading-[24px] lg:max-w-[496px]">
//                             Lorem Ipsum is simply dummy text of the printing and typesetting
//                             industry. Lorem Ipsum has been the industry's
//                         </p>
//                         <img
//                             src={worldairplane}
//                             alt="worldairplane"
//                             className=" flex justify-center  w-full max-w-[315px] h-[315px]"
//                         />
//                     </div>
//                     <div className="lg:w-1/2 w-full px-3 relative ">
//                         <Slider {...settings} ref={first}>
//                             <div className=" d-flex justify-content-center align-items-center w-100">
//                                 <img
//                                     src={flight_img}
//                                     alt="card"
//                                     className="xl:w-full lg:w-[60%]  object-fill   w-full sm:max-w-[390px] "
//                                 />
//                             </div>

//                             <div className=" d-flex justify-content-center align-items-center w-100">
//                                 <img
//                                     src={flight_img}
//                                     alt="card"
//                                     className="xl:w-full lg:w-[60%]  object-fill   w-full sm:max-w-[390px] "
//                                 />
//                             </div>

//                             <div className=" d-flex justify-content-center align-items-center w-100">
//                                 <img
//                                     src={flight_img}
//                                     alt="card"
//                                     className="xl:w-full lg:w-[60%] max-w-[300px]  object-fill   sm:max-w-[390px]"
//                                 />
//                             </div>
//                             <div className=" d-flex justify-content-center align-items-center w-100">
//                                 <img
//                                     src={flight_img}
//                                     alt="card"
//                                     className="xl:w-full lg:w-[60%] max-w-[300px]  object-fill   sm:max-w-[390px]"
//                                 />
//                             </div>
//                             <div className=" d-flex justify-content-center align-items-center w-100">
//                                 <img
//                                     src={flight_img}
//                                     alt="card"
//                                     className="xl:w-full lg:w-[60%] max-w-[300px]  object-fill   sm:max-w-[390px]"
//                                 />
//                             </div>

//                         </Slider>
//                         <div className=" flight flex gap-[11px] absolute xl:right-[-12%] right-[3%] bottom-[-10%] sm:bottom-[0%] align-items-center flex-row sm:flex-col text-end justify-content-end">
//                             <button
//                                 className="  block bg-[#1A1B39] hover:bg-[#313EF7] duration-300 hover:shadow-[0_10px_14px_0px_#0B0F50;]  py-[12px] px-[16px] rounded-full"
//                                 onClick={() => first?.current?.slickPrev()}
//                             >
//                                 <svg
//                                     width="11"
//                                     height="18"
//                                     viewBox="0 0 11 18"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M10 1L2 9L10 17" stroke="white" stroke-width="2" />
//                                 </svg>
//                             </button>
//                             <button
//                                 className=" block bg-[#1A1B39] hover:bg-[#313EF7] duration-300 hover:shadow-[0_10px_14px_0px_#0B0F50;]  py-[12px] px-[16px] rounded-full "
//                                 onClick={() => first?.current?.slickNext()}
//                             >
//                                 <svg
//                                     width="11"
//                                     height="18"
//                                     viewBox="0 0 11 18"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M1 17L9 9L1 0.999999"
//                                         stroke="white"
//                                         stroke-width="2"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
