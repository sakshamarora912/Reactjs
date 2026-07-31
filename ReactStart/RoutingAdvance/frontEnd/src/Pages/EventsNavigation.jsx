import React from 'react'
import { NavLink } from 'react-router-dom';

function EventsNavigation() {
  const navLinkStyle= "py-2 px-6 rounded-md no-underline bg-[#8a8784] text-[#1f1d1b] hover: bg-[#f9c762] active:bg-[#f9c762] ";
  const isActive = (match) =>  match ? "bg-[#f9c762]" : "";
  return (
    <header className="flex content-center p-8">
      <nav>
        <ul className="flex g-4">
          <li><NavLink to="/events" className={`${navLinkStyle} ${isActive}`} end> All Events </NavLink></li>
          <li><NavLink to="/events/new" className={`${navLinkStyle} ${isActive}`}> New Event</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation