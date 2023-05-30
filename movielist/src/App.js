import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'swiper/swiper.min.css'

import './App.scss';
import './assets/boxicons-2.0.7/css/boxicons.min.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Profile from './pages/profile/Profile';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Protected from './components/Protected';
import RedirectIfProtected from './components/RedirectIfProtected';


const App = () => {
  // const Layout=() =>{
  //   return(
  //     <>
  //     <Header/>
  //     <Outlet/>
  //     <Footer/>
  //     </>
  //   )
  // }
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "/",
  //         element:<Home/>
  //       },
  //       {
  //         path: "/register",
  //         element:<Register/>
  //       },
  //       {
  //         path: "/login",
  //         element:<Login/>
  //       },
  //       {
  //         path: "/home",
  //         element:<Home/>
  //       },
  //       {
  //         path: "/movie/search/:keyword",
  //         element:<Catalog/>
  //       },
  //       {
  //         path: "/movie",
  //         element:<Catalog/>
  //       },
  //       {
  //         path: "/movie/:id",
  //         element:<Detail/>
  //       },
        
  //     ],
      
  //   },
    
    
  // ]);

  return (
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route 
              path="/register" 
              element={
                <RedirectIfProtected>
                  <Register />
                </RedirectIfProtected>} 
            />

            <Route 
              path="/login" 
              element={
                <RedirectIfProtected>
                  <Login />
                </RedirectIfProtected>}
                />

            <Route 
              path="/profile" 
              element={
              <Protected>
                <Profile />
              </Protected>} 
            />

            <Route path="/movie/search/:keyword" element={<Catalog />} />
            <Route path="/movie" element={<Catalog />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>

          <Footer />

          <ToastContainer theme="colored" />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  )
};
export default App;