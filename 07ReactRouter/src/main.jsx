import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Github, { githubInfoLoader } from './Components/Github/github.jsx'
import Layout from './Components/Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/user.jsx' 
// const router =createBrowserRouter([
//   {
//     path: '/',
//     element :<Layout/>,
//     children:[
//       {path:'/',element:<Home/>},
//       {path:'/about',element:<About/>},
//       {path:'/github',element:<Github/>},
//       {path:'/contact',element:<Contact/>}
//     ] 
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      {/* <Route path='github' element={<Github/>}/> */}
      <Route path='contact' element={<Contact/>}/>
      <Route path='user' element={<User/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
    </Route>
  )
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)