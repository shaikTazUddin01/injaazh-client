// icons
import { MdOutlineWebhook } from "react-icons/md";
import Header from "../ReUseAbleHeader/Header";
// images
import img from '../../assets/b_logo.png'
import { motion } from 'framer-motion';

// css
import './coreService.css'
const CoreService = () => {

    return (
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
            <div className="border-x py-20 border-[var(--secondary-color)]">

                <div>
                    <Header title={"core services"} subtitle_1st={'Discover Oue '} subtitle_2nd={'capabilities'}></Header>
                    <div>

                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
                    {/* card-1 */}
                    <div className="text-white rounded services overflow-hidden p-0">
                        <div className="flex flex-col md:flex-row  gap-7 items-center py-14 px-5 z-20">
                            <div className="text-5xl bg-white rounded-full p-5 text-black">
                                <MdOutlineWebhook />
                            </div>
                            <div className="text-center md:text-left z-20">
                                <h1 className="text-3xl font-bold">Web Design</h1>
                                <p className="pt-3">The whole community is interested in growing the  FOX prize. The company is planningz</p>

                            </div>

                        </div>
                        <div className="animated-img w-[1200px]">
                            <img src={img} alt="" className=" object-cover -z-10 hover:-z-10 " />
                        </div>


                    </div>
                    {/* card-2 */}
                    <div className="text-white rounded services overflow-hidden p-0">
                        <div className="flex flex-col md:flex-row  gap-7 items-center py-14 px-5 z-20">
                            <div className="text-5xl bg-white rounded-full p-5 text-black">
                                <MdOutlineWebhook />
                            </div>
                            <div className="text-center md:text-left z-20">
                                <h1 className="text-3xl font-bold">Web Design</h1>
                                <p className="pt-3">The whole community is interested in growing the  FOX prize. The company is planningz</p>

                            </div>

                        </div>
                        <div className="animated-img w-[1200px]">
                            <img src={img} alt="" className=" object-cover -z-10 hover:-z-10 " />
                        </div>


                    </div>
                    {/* card-3 */}
                    <div className="text-white rounded services overflow-hidden p-0">
                        <div className="flex flex-col md:flex-row  gap-7 items-center py-14 px-5 z-20">
                            <div className="text-5xl bg-white rounded-full p-5 text-black">
                                <MdOutlineWebhook />
                            </div>
                            <div className="text-center md:text-left z-20">
                                <h1 className="text-3xl font-bold">Web Design</h1>
                                <p className="pt-3">The whole community is interested in growing the  FOX prize. The company is planningz</p>

                            </div>

                        </div>
                        <div className="animated-img w-[1200px]">
                            <img src={img} alt="" className=" object-cover -z-10 hover:-z-10 " />
                        </div>


                    </div>
                    {/* card-4 */}
                    <div className="text-white rounded services overflow-hidden p-0">
                        <div className="flex flex-col md:flex-row  gap-7 items-center py-14 px-5 z-20">
                            <div className="text-5xl bg-white rounded-full p-5 text-black">
                                <MdOutlineWebhook />
                            </div>
                            <div className="text-center md:text-left z-20">
                                <h1 className="text-3xl font-bold">Web Design</h1>
                                <p className="pt-3">The whole community is interested in growing the  FOX prize. The company is planningz</p>

                            </div>

                        </div>
                        <div className="animated-img w-[1200px]">
                            <img src={img} alt="" className=" object-cover -z-10 hover:-z-10 " />
                        </div>


                    </div>
                    {/* card-5 */}
                    <div className="text-white rounded services overflow-hidden p-0">
                        <div className="flex flex-col md:flex-row  gap-7 items-center py-14 px-5 z-20">
                            <div className="text-5xl bg-white rounded-full p-5 text-black">
                                <MdOutlineWebhook />
                            </div>
                            <div className="text-center md:text-left z-20">
                                <h1 className="text-3xl font-bold">Web Design</h1>
                                <p className="pt-3">The whole community is interested in growing the  FOX prize. The company is planningz</p>

                            </div>

                        </div>
                        <div className="animated-img w-[1200px]">
                            <img src={img} alt="" className=" object-cover -z-10 hover:-z-10 " />
                        </div>


                    </div>


                    {/* card-6 */}
                    <div className="text-white rounded services overflow-hidden p-0">
                        <div className="flex flex-col md:flex-row  gap-7 items-center py-14 px-5 z-20">
                            <div className="text-5xl bg-white rounded-full p-5 text-black">
                                <MdOutlineWebhook />
                            </div>
                            <div className="text-center md:text-left z-20">
                                <h1 className="text-3xl font-bold">Web Design</h1>
                                <p className="pt-3">The whole community is interested in growing the  FOX prize. The company is planningz</p>

                            </div>

                        </div>
                        <div className="animated-img w-[1200px]">
                            <img src={img} alt="" className=" object-cover -z-10 hover:-z-10 " />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreService;