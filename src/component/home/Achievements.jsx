// icons
import { BsClipboardCheck } from "react-icons/bs";
const Achievements = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="bg-[var(--primary-color)]  ">
                <div className="py-16 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-10 md:gap-10 lg:gap-0">
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <div className="text-7xl md:text-5xl">
                            <BsClipboardCheck />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-6xl font-semibold">20K</h1>
                            <p className="uppercase text-xl font-semibold mt-2">Project COmpleted</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <div className="text-7xl md:text-5xl">
                            <BsClipboardCheck />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-6xl font-semibold">24</h1>
                            <p className="uppercase text-xl font-semibold mt-2">team member</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <div className="text-7xl md:text-5xl">
                            <BsClipboardCheck />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-6xl font-semibold">20K</h1>
                            <p className="uppercase text-xl font-semibold mt-2">awards winning</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <div className="text-7xl md:text-5xl">
                            <BsClipboardCheck />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-6xl font-semibold">20K</h1>
                            <p className="uppercase text-xl font-semibold mt-2">happy customer</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Achievements;