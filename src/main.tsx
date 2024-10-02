import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BlogsPage from './blogs/page.tsx'
import BlogDetailPage from './blogs/blogDetail.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import { Root } from './routes/root.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/blogs",
    element: <BlogsPage/>
  },
  {
    path:"/blogs/2",
    element:<BlogDetailPage/>
  }
]);

import Home from './Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
<RouterProvider router={router} />

  </StrictMode>,
)
