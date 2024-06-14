import './App.css'
import Home from './Route/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import { BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Something from './Components/Something';

function App() {
  return (
    <BrowserRouter>
   
     <Navbar />
  
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path = '/something' element={<Something/>}/>
        {/* <Route path = '/skins' element={<ShopCategory category="Skins"/>}/>
        <Route path = '/cases' element={<ShopCategory category="Cases"/>}/>
        <Route path = '/screenProtecter' element={<ShopCategory category="ScreenProtecters"/>}/>
        <Route path = '/gaming' element={<ShopCategory category="Gaming"/>}/>
        <Route path = '/artifacts' element={<ShopCategory category="Artifacts"/>}/>
        <Route path = '/help' element={<ShopCategory category="Help"/>}/>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/login' element={<LoginSigup/>}/>  */}
     </Routes>
     <Footer />
    </BrowserRouter>
  )
}

export default App
