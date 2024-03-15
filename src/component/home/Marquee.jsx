import './marquee.css'

const Marquee = () => {
    return (
        <div className='bg-black h-[220px] overflow-hidden'>
            <div>

            <marquee behavior="scroll" direction="left" className="bg-[#444444] h-24 text-center flex items-center text-white marquee01 text-2xl">elcome to Our Website! 🌟 Stay Updated with the Latest News and Offers. 📢 Check Back Often for More Updates!elcome to Our Website! 🌟 Stay Updated with the Latest News and Offers. 📢 Check Back Often for More Updates!</marquee>
            <marquee behavior="scroll" direction="right" className="bg-yellow-600 text-white h-24 text-center flex items-center marquee02 text-2xl">elcome to Our Website! 🌟 Stay Updated with the Latest News and Offers. 📢 Check Back Often for More Updates!elcome to Our Website! 🌟 Stay Updated with the Latest News and Offers. 📢 Check Back Often for More Updates!</marquee>
            </div>
        </div>
    );
};

export default Marquee;