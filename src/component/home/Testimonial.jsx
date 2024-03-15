// icons
import { BsClipboardCheck } from "react-icons/bs";
const Testimonial = () => {
    return (
        <div className="">
            <div className="bg-[var(--primary-color)]  ">
                <div className="py-16 px-20 flex justify-between">
                    <div className="flex items-center gap-5 justify-between">
                        <div className="text-5xl">
                            <BsClipboardCheck />
                        </div>
                        <div>
                            <h1 className="text-6xl font-semibold">20K</h1>
                            <p className="uppercase text-xl font-semibold mt-2">Project COmpleted</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="text-5xl">
                            <BsClipboardCheck />
                        </div>
                        <div>
                            <h1 className="text-6xl font-semibold">24</h1>
                            <p className="uppercase text-xl font-semibold mt-2">team member</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="text-5xl">
                            <BsClipboardCheck />
                        </div>
                        <div>
                            <h1 className="text-6xl font-semibold">20K</h1>
                            <p className="uppercase text-xl font-semibold mt-2">awards winning</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="text-5xl">
                            <BsClipboardCheck />
                        </div>
                        <div>
                            <h1 className="text-6xl font-semibold">20K</h1>
                            <p className="uppercase text-xl font-semibold mt-2">happy customer</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;