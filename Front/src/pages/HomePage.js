// HomePage.js
import React from 'react';
import Header from '../components/Header';
import BookList from '../components/BookList';
import Footer from '../components/Footer';
import Footer1 from '../styles/HomePage.css';
import { Routes, Route, Outlet } from 'react-router-dom';

function HomePage() {
    console.log("home");
  return (
    <div>
      <Header />
      <Footer />
      <Outlet />
    </div>
  );
}

export default HomePage;
