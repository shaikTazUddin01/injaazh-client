import { Outlet } from 'react-router-dom';
import Navbar from '../component/shared/Navbar';
import Footer from '../component/shared/Footer';
import GoToTop from '../component/specialComponent/GoToTop';
import { motion } from 'framer-motion';

const MainLayout = () => {
    return (
        <motion.div 
    
                        initial={{y:-1000}}
                        animate={{y:0}}
                        transition={{
                            duration:".2"

                        }}
        >
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className='bg-black'>
            <Footer></Footer>
            </div>
            {/* go to top button */}
            <GoToTop></GoToTop>
        </motion.div>
    );
};

export default MainLayout;