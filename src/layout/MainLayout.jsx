import { Outlet } from 'react-router-dom';
import Navbar from '../component/shared/Navbar';
import Footer from '../component/shared/Footer';
import GoToTop from '../component/specialComponent/GoToTop';

const MainLayout = () => {
    return (
        <div className=''>
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div>
            <Footer></Footer>
            </div>
            {/* go to top button */}
            <GoToTop></GoToTop>
        </div>
    );
};

export default MainLayout;