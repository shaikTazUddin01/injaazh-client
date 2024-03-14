import { Outlet } from 'react-router-dom';
import Navbar from '../component/shared/Navbar';

const MainLayout = () => {
    return (
        <div className=''>
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;