import React from 'react';
import './homepage.css';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import SideBar from '../../components/SideBar/SideBar';

export default function Homepage() {
  return (
    <>
      <Header />
      <div className='home'>
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
