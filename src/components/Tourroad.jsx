
import Waterimg from "../assets/images/waterimg.webp";
import lineimg from "../assets/images/line-img.webp";
import dots from "../assets/images/dots-line.webp";
import flyline from "../assets/images/fly-line.png";
import { useState } from "react";
const Tourroad = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="max-w-[1200px] mx-auto px-3 pb-[100px] flex max-lg:gap-7 flex-wrap-reverse relative z-[1] overflow-hidden">
                <div className="lg:w-1/2 w-full  " data-aos-duration="2000" data-aos="fade-right">
                    <img src={Waterimg} alt="water" className=" mx-auto" />
                </div>
                <div className="lg:w-1/2 max-lg:flex max-lg:items-center max-lg:justify-center flex-col w-full mt-[40px] lg:mt-0" data-aos-duration="2000" data-aos="fade-left">
                    <div className="flex gap-5 items-center justify-center max-sm:justify-start">
                        <p className=" font-[Montserrat] text-[20px] text-nowrap text-[#313EF7] font-black  leading-6">
                            Let’s Fly
                        </p>
                        <img src={flyline} alt="line" className="w-[80%] max-lg:max-w-[480px] max-sm:w-[100%] "/>
                    </div>
                    <h3 className="font-[Montserrat] mx-auto max-w-[588px] pt-5 text-[26px] md:text-[32px] text-[#030303] font-bold  leading-10   self-stretch">
                        {" "}
                        It’s one of the leading online flight booking platforms in the world
                    </h3>
                    <div className=" flex pt-8 relative">
                        <div className="">
                            <img
                                className=" absolute mt-[20px] h-[61%] left-[0.7%] -z-10"
                                src={lineimg}
                                alt="lineimg"
                            />
                        </div>
                        <div className=" flex flex-col">
                            <div className=" flex items-baseline gap-[10px]">
                                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7 ">
                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                    text
                                </p>
                            </div>
                            <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7 ">
                                    If you are going to use a passage of Lorem Ipsum
                                </p>
                            </div>

                            <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7 ">
                                    Lorem Ipsum is therefore always free from repetition, injected
                                    humour, or non-characteristic words etc.
                                </p>
                            </div>
                            <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7  ">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setShowModal(true)} className=" px-[45px] py-3.5 mt-[40px] button-book bg-indigo-600 rounded-[56px] shadow border justify-start items-start gap-2.5 inline-flex  basis-0 text-center text-white text-base  duration-700 font-semibold font-['Montserrat'] leading-7 hover:bg-blue-100 hover:text-indigo-600">
                        Book Now
                    </button>
                    {showModal ? (
                        <>
                            <div
                                className="modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto text-center max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start mx-auto font-['Montserrat'] max-w-[500px] p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 font-['Montserrat'] text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <p className="my-4 text-blueGray-500 max-w-[400px] sm:text-[40px] text-[30px] font-bold font-['Montserrat'] leading-relaxed">
                                                Confirm Your Water Park Ticket!
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="bg-indigo-500 text-white active:scale-90 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default Tourroad
