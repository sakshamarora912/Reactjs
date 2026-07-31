import { Link } from 'react-router-dom';
import search from '../Assets/search.png'
import cart from '../Assets/cart.png'

const Navbar = () => {
  return (
    <div  className="flex justify-around p-2 h-16" style={{height:"4em"}}>
      <div className='flex items-center gap-4'>
        <p className='text-gray-900 text-xl font-semibold'>Shopper</p>
      </div>
      <ul className='flex items-center gap-4 text-black font-medium text-sm list-none'>
        <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link style={{textDecoration:'none'}} to="#">Categories</Link></li>
        <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link style={{textDecoration:'none'}} to = "#">Sale</Link> </li>
        <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link style={{textDecoration:'none'}} to = "#">Clearance</Link> </li>
        <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link style={{textDecoration:'none'}} to = "#">NewStock</Link></li>
        <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link style={{textDecoration:'none'}} to = "#">Tending</Link></li>
      </ul>
      <div>
        <div className='text-black flex gap-4 text-xs'>
          <p>Help</p>
          <p>Order & Refund</p>
          <p>Hi Saksham</p>
        </div>
        <div className='flex gap-4 justify-end'>
          <button 
              className='text-black'
              onClick={()=>{
              localStorage.removeItem('auth-token');
              window.location.replace('/')}}
          >
          Logout
          </button> 
          <img className='h-4 m-2' src={search} height="20" alt='search'/>
          <img className='h-4 m-2' src={cart} height="20" alt="cart"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar