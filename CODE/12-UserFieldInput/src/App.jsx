import Header from './components/Header.jsx';
import Login from './components/StateLogin.jsx';
import Signup from './components/Signup.jsx';
import  Basic from './components/Basic.jsx'


function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Signup/> */}
        {/* <Login/> */}
        <Basic/>
      </main>
    </>
  );
}

export default App;
