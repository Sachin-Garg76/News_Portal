import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useLocation, Routes, Route } from 'react-router-dom';
import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
// landing page component 
import Home from './components/landingpage/Home';
import SignIn from './components/landingpage/SignIn';
import AboutUs from './components/landingPage/AboutUs';
import NewsDetails from './components/landingpage/NewsDetail';
import NewsCategory from './components/landingpage/NewsCategory';
import ImageGaralley from './components/landingpage/ImageGaralley';
import Latestvideos from './components/landingpage/Latestvideos';
import ContactUs from './components/landingpage/ContactUs';
import UserRegister from './components/landingpage/UserRegister';
import Footer from './components/landingPage/Footer';
import TopNews from './components/landingPage/TopNews';
// user component 
import PostNews from './components/user/PostNews';
import YourNews from './components/user/YourNews';
import UserEditProfile from './components/user/UserEditProfile';
import UserAllNewsList from './components/user/AllNews';
// admin component 
import EditProfile from './components/admin/EditProfile';
import AllNews from './components/admin/AllNews';
import AdminContactUsList from './components/admin/AdminContactUsList';
// main component
import NotFound from './Notfound';

function App() {
 const location=useLocation()
  const [userData,setUserData]=useState(null);
  useEffect(()=>{
  const user=JSON.parse(localStorage.getItem('userInfo'));
  setUserData(user);
  },[location?.pathname])
  
  return (
    <>
        <Routes>
          {/* LandingPage */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/news' element={<NewsCategory />} />
          <Route path='/gallery' element={<ImageGaralley />} />
          <Route path='/videos' element={<Latestvideos />} />
          <Route path='/registration' element={<UserRegister />} />
          <Route path='/contact' element={<ContactUs />} />
        <Route path='/news-details' element={<NewsDetails />} />
          <Route path='/topNews' element={<TopNews />} />
          <Route path='/login' element={<SignIn/>} />
          {/* Admin Route */}
         { userData?.userType=="admin" && <>
          <Route path='/admin-profile' element={<EditProfile />} />
          <Route path='/admin-newsList' element={<AllNews />} />
          <Route path='/admin-contactUs' element={<AdminContactUsList />} />
         </>}
          {/* UserROute */}
         { userData?.userType=="user" && <>
          <Route path='/user-profile' element={<UserEditProfile/>} />
          <Route path='/user-addNews' element={<PostNews />} />
          <Route path='/user-list' element={<YourNews />} />
          <Route path='/user-alllist' element={<UserAllNewsList/>} />
         </>}
         <Route path='*' element={<NotFound/>}/>
        </Routes>
          <Footer/>
    </>
  )
}

export default App