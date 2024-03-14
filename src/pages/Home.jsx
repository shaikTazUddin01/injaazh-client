import AboutSection from "../component/home/AboutSection";
import Banner from "../component/home/Banner";
import CoreService from "../component/home/CoreService";
import Target from "../component/home/Target";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <AboutSection></AboutSection> */}
            <Target></Target>
            <CoreService></CoreService>
        </div>
    );
};

export default Home;