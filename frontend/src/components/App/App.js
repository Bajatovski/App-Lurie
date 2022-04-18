
import './App.css';
import React from 'react';
import Header from '../Header/Header';
import {Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Blog from  '../Blog/Blog';

function App() {
  return (
    <>
     <Header />
     {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/information" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
