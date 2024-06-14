import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Routes/navbar';
import Home from './Routes/Home';
import Footer from './Routes/footer'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
import HostCategory from './Routes/hostcategory';
import TermPolicy from './Routes/termPolicy';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSigup from './Routes/loginSignup'

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/term-policy" element={<TermPolicy category="terms" />} />
      <Route path="/privacy-policy" element={<TermPolicy category="privacypolicy" />} />
      <Route path = '/shared' element={<HostCategory plan="shared"/>}/>
      <Route path = '/vps' element={<HostCategory plan="vps"/>}/>
      <Route path = '/cloud' element={<HostCategory plan="cloud"/>}/>
      <Route path = '/dedicated' element={<HostCategory plan="dedicated"/>}/>
      <Route path = '/reseller' element={<HostCategory plan="reseller"/>}/>
      {/* <Route path="/aboutus" element={<AboutUs/>}/> */}
      <Route path = '/login' element={<LoginSigup/>}/>
       
      </Routes>
      <Footer />
   </BrowserRouter>
  );
}

export default App
