import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import MainLay from '../layout/MainLay';
import Mainly from '../layout/Mainly';

const Route =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        // element:<MainLay></MainLay>,
        // element:<Mainly></Mainly>,
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
