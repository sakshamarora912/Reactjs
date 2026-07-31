import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className='w-max-[60rem] m-auto p-8 flex content-center'>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <NavLink to="/" className={({isActive })=> isActive ? 'text-purple-800 underline':''}> Home </NavLink>
          </li>
          <li>
            <NavLink  to="/products" className={({isActive })=> isActive ? 'text-purple-800 underline':''}> Product </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
