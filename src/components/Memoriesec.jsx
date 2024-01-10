import memories_img from "../assets/images/memories-img.webp";
import memories_2 from "../assets/images/memories-2.webp";
import memories_3 from "../assets/images/memories-3.webp";
import memories_4 from "../assets/images/memories-4.webp";

const mycardinfo = [
    {
        image: memories_img
    },
    {
        "padding": "pt-[50px]",
        image: memories_2,
    },
    {
        image: memories_3
    },
    {
        "padding": "pt-[50px]",
        image: memories_4,
    },
];
const Memoriesec = () => {
    const mycard = mycardinfo.map((mycard) => (
        <img className={mycard.padding} src={mycard.image} alt="imgh" />
    ));

    return (
        <>
            <div className=" bg-[#FFFFF]" data-aos-duration="2000" data-aos="fade-up">
                <div className="max-w-[1200px] mx-auto px-3 pb-[90px]">
                    <h2 data-aos-duration="2000" data-aos="fade-down" className=" text-center text-slate-900 md:text-[40px] text-[30px]  font-bold font-['Montserrat'] capitalize md:leading-[60px] leading-[40px] tracking-wide pb-[40px]">
                        Make memories with us
                    </h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center items-center w-full gap-[10px]  md:gap-[20px]">{mycard}</div>
                </div>
            </div>
        </>
    );
}

export default Memoriesec