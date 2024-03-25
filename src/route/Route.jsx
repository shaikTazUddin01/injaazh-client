import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

const Route =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/portfolio',
                element:<Portfolio></Portfolio>
            }
        ]
    }
])

export default Route;
