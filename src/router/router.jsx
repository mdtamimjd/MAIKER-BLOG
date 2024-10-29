import {createBrowserRouter} from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import PageNotFound from '../pages/PageNotFound.jsx';

const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"*",
        element:<PageNotFound/>
    }
])
export default router;