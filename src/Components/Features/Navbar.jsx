import React from 'react'
import { Link } from 'react-router-dom'
// import { CiShoppingCart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
function Navbar() {
  const data = useSelector(state => state.product.cart);
  return (
    <div className=' flex justify-evenly bg-slate-900 text-white p-6 text-lg'>
        <div>REDUX</div>
        <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
  <div className=' flex flex-row items-center text-white '>
    Cart <FaShoppingCart style={{color:"white"}} className="ml-2" />
   <div className='ml-3'> {data.length}</div>
  </div>
</Link>
    </div>
  )
}

export default Navbar