import React from 'react';
import { NavLink } from 'react-router-dom';
import NewsletterPage from '../Components/NewsletterPage';

const MainNavigation = () => {
  const navLinkStyle = "no-underline text-[#fbd997]";
  const isActive = ({match}) => match ? "text-white underline": ""

  return (
    <header className='max-w-[60rem] m-auto p-8 flex justify-between'>
      <nav>
        <ul className='flex gap-4'>
          <li><NavLink to="/" className={`${navLinkStyle} ${isActive}`}>Home</NavLink></li>
          <li><NavLink to="/events" className={`${navLinkStyle} ${isActive}`}>Events</NavLink></li>
          <li><NavLink to="/newsletter" className={`${navLinkStyle} ${isActive}`}>Newsletter</NavLink></li>
        </ul>
      </nav>
      <NewsletterPage/>
    </header>
  );
};

export default MainNavigation;
