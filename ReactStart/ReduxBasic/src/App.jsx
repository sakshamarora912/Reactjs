import { Fragment } from 'react';
import { useSelector } from 'react-redux';  // Missing semicolon
import Counter from './component/counter';
import Header from './component/header';
import Auth from './component/auth';
import UserProfile from './component/UserProfile';  // Component name should start with a capital letter

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}  {/* Component name should start with a capital letter */}
      <Counter />
    </Fragment>
  );
}

export default App;
