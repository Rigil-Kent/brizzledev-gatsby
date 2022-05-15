import React from 'react';
import Footer from './Footer';
// import Navbar from './Navbar';
import '../styles/global.scss';
import SlideNav from './SlideNav';

export default function Layout({ children }) {
  return (
    <div className='layout'>
        <SlideNav />

        <div className='page-content'>
            { children }
        </div>

        <Footer />
    </div>
  );
}
