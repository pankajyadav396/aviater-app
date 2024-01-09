import React from 'react'
import plane from "../assets/images/plane.png";
import aviation from "../assets/images/Aviation.png";
import Nav from './Nav'
export const Header = () => {
    return (
        <>
            <div className="min-h-[550px] sm:min-h-[660px] lg:min-h-[810px] bg-header overflow-hidden bg-cover bg-no-repeat bg-center flex flex-col " >
                <div className=' relative max-w-[1200px] px-3 mx-auto '>
                    <Nav />
                    <img src={aviation} alt="aviator" className='absolute lg:mt-[75px] xl:max-w-[1170px] w-full' />
                    <div className="flex flex-col grow items-center justify-center lg:justify-start">
                        <div className="lg:mt-[40px]">
                            <img className="w-full plane" src={plane} alt="plane" />
                        </div>
                        <h1 className=" lg:mt-2 text-[#FFF] text-center font-montserrat text-[35px] sm:text-[48px] not-italic font-bold leading-[150%] tracking-[0.72px] capitalize px-3">
                            Travel around the world
                        </h1>
                        <p className="px-3 mt-2 lg:mb-0 text-[rgba(255,255,255,0.70)] text-center font-inter text-xs not-italic font-normal leading-normal">
                            One of the advantages of being disorganized is that one is always
                            having surprising discoveries
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header