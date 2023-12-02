import { createBrowserRouter } from "react-router-dom";
import App from './../App';

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/login",
        element:<div>login</div>
    },
    {
        path:"*",
        
    }
])

export default routes