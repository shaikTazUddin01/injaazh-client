import { Outlet } from 'react-router-dom';
import Navbar from '../component/shared/Navbar';
import Footer from '../component/shared/Footer';

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
        </div>
    );
};

export default MainLayout;