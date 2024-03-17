import Header from "../ReUseAbleHeader/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
// import images
import tm_01 from '../../assets/tm_01.png'
import tm_02 from '../../assets/tm_02.png'
import tm_03 from '../../assets/tm_03.png'
import tm_04 from '../../assets/tm_04.png'
import tm_05 from '../../assets/tm_05.png'
// team css
import './Team.css'

const Team = () => {
    return (
        <div className="max-w-[1300px] mx-auto ">
            <div className="px-10">
                <div className="border-x">
                    <div className='pt-20 pb-10 text-center'>
                        <Header title={'our team'} subtitle_1st={'professional team'} subtitle_2nd={'behind us'}></Header>
                    </div>
                </div>
            </div>
            <div className="">
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                // centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <img src={tm_01} alt="" />
                    <div className="light-layer"></div>
                    <div className="dark-layer"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tm_02} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tm_03} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tm_04} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tm_05} alt="" />
                </SwiperSlide>

            </Swiper>
            </div>
        </div>
    );
};

export default Team;