import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider,createRoutesFromElements, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import GitHub from './components/GitHub.jsx';
import FetchGitData from './components/FetchGitData.js';
import GitUser from './components/GitUser';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
  
//     children: [
//      {
//         path:"",
//         element: <Home/>,
//       },{
//         path:"about",
//         element:<About/>,
//       },{ 
//         path:"contact",
//         element:<Contact/>,
//       },{
//         path:"github",
//         element:<GitHub/>,
//         loader:FetchGitData
//       }
//     ],
//   },
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
    
     <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="gituser" element={<GitUser/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="github" element={<GitHub/>} 
      loader={FetchGitData}/>
      </Route>
     
  )
);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)


