
import React from "react";
import right_arrow from "../assets/images/right-arrow.webp";
import { Customer, Discount, Lock, Planebook } from "../assets/svg/Icon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const myarray = [
    {
        "margin": "mt-[50px]" ,  
        Img: <Planebook />,
        heading: "Best Guide",
        pera: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex{,} quis finibus magna.",
        arrow: right_arrow,
    },
    {
        Img: <Discount />,
        heading: "More Discount",
        pera: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex{,} quis finibus magna.",
        arrow: right_arrow,
    },
    {
        "margin": "lg:mt-[50px]",
        Img: <Lock />,
        heading: "Private",
        pera: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex{,} quis finibus magna.",
        arrow: right_arrow,
    },
    {
        Img: <Customer />,
        heading: "Online Support",
        pera: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex{,} quis finibus magna.",
        arrow: right_arrow,
    },
];

const Features = () => {
    const cardcomponent = myarray.map((myarray) => (

        <div
            className={` ${myarray.margin} flex flex-col justify-center items-center border max-w-[281.633px] rounded-[185px] bg-[#fff] shadow-[0_100px_200px_0_rgba(1,23,54,0.05)] px-5 py-10`}
        >
            <div className=" flex justify-center items-center mx-auto w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] ">
                {myarray.Img}
            </div>
            <p className=" pt-5 text-2xl font-extrabold font-[Montserrat] leading-[150%] text-[#030522] text-center">
                {myarray.heading}
            </p>
            <p className=" text-base font-normal font-[Montserrat] leading-[150%] text-[_rgba_(_3_5_34_0.65)] text-center pt-8 ">
                {myarray.pera}
            </p>
            <div className=" pt-8 flex justify-center">
                <a href="#">
                    <img src={myarray.arrow} alt="arow" />
                </a>
            </div>
        </div >
    ));

    return (
        <div className="max-w-[1200px] mx-auto px-3 py-[100px]">
            <h2 className=" md:text-[40px] text-[30px] font-bold leading-[150%] font-[Montserrat] text-[#030522] text-center">
                Our Features
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center justify-center gap-8 pt-[30px] ">
                {cardcomponent}
            </div>
        </div>
    );
}

export default Features