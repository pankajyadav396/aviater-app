
import React from "react";
import footer_logo from "../assets/images/logo-img.png";
import fb from "../assets/images/fb.webp";
import deen from "../assets/images/linkden.webp";
import twitter from "../assets/images/twitter.webp";
import img_c from "../assets/images/img-c.webp";

const Lastsec = () => {
    return (
        <>
            <div className=" bg-footer pb-4 pt-[70px] bg-no-repeat  bg-cover bg-center">
                <div className="max-w-[1200px] mx-auto px-3">
                    <div className=" flex flex-wrap justify-between gap-[30px] pb-[40px] pt-[30px]  border-b-2 border-[#1A223F]">
                        <div data-aos-duration="2000" data-aos="fade-up">
                            <img src={footer_logo} alt="image-tweeter" className="w-[164px]" />
                            <p className=" font-[Montserrat] fs-[16px]  font-normal text-[#A7A7A7] max-w-[300px] pt-[25px]">
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form
                            </p>
                            <div className=" flex items-center gap-4  pt-[25px]">
                                <a href="https://www.facebook.com/" target="_blank">
                                    <img
                                        src={fb}
                                        alt="facebook"
                                        className=" duration-300 hover:translate-y-[-5px] cursor-pointer"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/feed/" target="_blank">
                                    <img
                                        src={deen}
                                        alt="linkdin"
                                        className=" duration-300 hover:translate-y-[-5px] cursor-pointer"
                                    />
                                </a>
                                <a href="https://twitter.com/" target="_blank">
                                    {" "}
                                    <img
                                        src={twitter}
                                        alt="twitter  "
                                        className=" duration-300 hover:translate-y-[-5px] cursor-pointer"
                                    />
                                </a>
                            </div>
                        </div>

                        <ul data-aos-duration="2000" data-aos="fade-down">
                            <li className=" font-['Montserrat'] text-[24px]  font-bold text-[#FFF]  leading-9">
                                Address
                            </li>
                            <li className="mt-[10px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal  font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Integrations
                                </a>
                            </li>
                            <li className="mt-[15px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Hello
                                </a>
                            </li>
                            <li className=" mt-[15px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Intercom
                                </a>
                            </li>
                            <li className="mt-[15px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal  transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Customer
                                </a>
                            </li>
                        </ul>
                        <ul data-aos-duration="2000" data-aos="fade-down">
                            <li className=" font-['Montserrat'] text-[24px]  font-bold text-[#FFF]  leading-9">
                                About
                            </li>
                            <li className="mt-[10px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Our Blog
                                </a>
                            </li>
                            <li className="mt-[15px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Customers
                                </a>
                            </li>
                            <li className=" mt-[15px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Our Team
                                </a>
                            </li>
                            <li className="mt-[15px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Careers
                                </a>
                            </li>
                            <li className="mt-[15px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Integrations
                                </a>
                            </li>
                        </ul>
                        <ul data-aos-duration="2000" data-aos="fade-down">
                            <li className=" font-['Montserrat'] text-[24px]  font-bold text-[#FFF]  leading-9">
                                Support
                            </li>
                            <li className="mt-[10px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Test Zoom
                                </a>
                            </li>
                            <li className="mt-[15px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Account
                                </a>
                            </li>
                            <li className=" mt-[15px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Support Center
                                </a>
                            </li>
                            <li className="mt-[15px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Live Training
                                </a>
                            </li>
                            <li className="mt-[15px]">
                                <a
                                    href="#"
                                    className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 pb-[4.2px]"
                                >
                                    Accessibility
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className=" text-white sm:text-sm pb-[15px] pt-[25px] text-[12px] font-normal font-['Montserrat'] flex items-center gap-1  justify-center">
                        CopyrightFT <img src={img_c} alt="" />{" "}
                        <span className="text-white sm:text-sm text-[12px] font-normal font-['Montserrat']">
                            PLANE 2022 All right reserved
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Lastsec;