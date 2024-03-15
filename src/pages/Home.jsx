// import AboutSection from "../component/home/AboutSection";
import Banner from "../component/home/Banner";
import Capabilities from "../component/home/Capabilities";
import CoreService from "../component/home/CoreService";
import Marquee from "../component/home/Marquee";
import Target from "../component/home/Target";
import Testimonial from "../component/home/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <AboutSection></AboutSection> */}
            <Target></Target>
            <CoreService></CoreService>
            <Testimonial></Testimonial>
            <Capabilities></Capabilities>
            {/* <Marquee></Marquee> */}
        </div>
    );
};

export default Home;