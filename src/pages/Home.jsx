// import AboutSection from "../component/home/AboutSection";
import Banner from "../component/home/Banner";
import Capabilities from "../component/home/Capabilities";
import CoreService from "../component/home/CoreService";
import HiredAndAward from "../component/home/HiredAndAward";
import Marquee from "../component/home/Marquee";
import Target from "../component/home/Target";
import Team from "../component/home/Team";
import Achievements from "../component/home/Achievements";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Target></Target>
            <CoreService></CoreService>
            <Achievements></Achievements>
            <Capabilities></Capabilities>
            {/* <Marquee></Marquee> */}
            {/* <Team></Team> */}
            {/* <HiredAndAward></HiredAndAward> */}
        </div>
    );
};

export default Home;