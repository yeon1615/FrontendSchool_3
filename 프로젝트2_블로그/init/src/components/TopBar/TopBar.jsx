import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
  const user = true;
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='fab fa-facebook-square'></i>
        <i className='fab fa-instagram-square'></i>
        <i className='fab fa-pinterest-square'></i>
        <i className='fab fa-twitter-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/about'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/contact'>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          {user && (
            <li className='topListItem'>
              <Link className='link' to='/'>
                LOGOUT
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          // 홈페이지에 라우터,스위치가 있으므로 링크만 사용 가능
          <Link className='link' to='/settings'>
            <img
              className='topImg'
              src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
            />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
}
