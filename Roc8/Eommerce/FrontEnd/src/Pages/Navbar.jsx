import { Link } from 'react-router-dom';
import search from '../Assets/search.png'
import cart from '../Assets/cart.png'

const Navbar = () => {
  return (
    <div>
       <div className='container text-black flex justify-end gap-4 text-xs p-1 mx-12'>
          <p>Help</p>
          <p>Order & Refund</p>
          <p>Hi Saksham</p> 
      </div>
      <div className="container grid grid-cols-3 px-2 h-16 mx-12">
        <div className='flex items-center gap-4'>
          <p className='text-gray-900 text-xl font-semibold'>Shopper</p>
        </div>
        <ul className='flex items-center gap-4 text-black font-medium text-sm list-none m-auto'>
          <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link className='text-black no-underline' to = "#">Categories</Link></li>
          <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link className='text-black no-underline' to = "#">Sale</Link> </li>
          <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link className='text-black no-underline' to = "#">Clearance</Link> </li>
          <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link className='text-black no-underline' to = "#">NewStock</Link></li>
          <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'><Link className='text-black no-underline' to = "#">Tending</Link></li>
        </ul>
        <div className='content-center'>
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
      <div className='text-black py-2 text-xs bg-gray-200'><span>&lt;</span>Get 10% off on business sign up<span>&gt;</span></div>
    </div>
  )
}

export default Navbar