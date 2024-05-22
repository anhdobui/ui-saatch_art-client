import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faListAlt, faCog, faSignOutAlt, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import 'tailwindcss/tailwind.css'
import { Link } from 'react-router-dom'
import { AppContext } from 'src/contexts/app.context'
import { clearLS } from 'src/utils/auth'

const Sidebar: React.FC = () => {
  const { setIsAuthenticated, setDataCart } = useContext(AppContext)
  const handleLogout = () => {
    setDataCart(null)
    clearLS()
    setIsAuthenticated(false)
  }
  return (
    <div className='absolute right-[102%] z-[1000] h-auto min-h-0 w-64 overflow-hidden rounded-lg  border-gray-200 bg-white text-gray-800 shadow-md'>
      <div className='overflow-hidden'>
        <div className='flex items-center justify-center border-b border-gray-200 p-4'>
          <h2 className='text-lg font-bold'>Saatchi Art</h2>
        </div>
        <ul className='py-6'>
          <li className='flex cursor-pointer items-center  hover:bg-gray-100 '>
            <Link className='w-full px-8 py-4' to='/user/profile'>
              <FontAwesomeIcon icon={faUser} className='mr-4' />
              <span>Profile</span>
            </Link>
          </li>
          <li className='flex cursor-pointer items-center  hover:bg-gray-100'>
            <Link className='w-full px-8 py-4' to='/user/order-list'>
              <FontAwesomeIcon icon={faListAlt} className='mr-4' />
              <span>Order List</span>
            </Link>
          </li>
          <li className='flex cursor-pointer items-center  hover:bg-gray-100 '>
            <Link className='w-full px-8 py-4' to='/user/checkout'>
              <FontAwesomeIcon icon={faCartShopping} className='mr-4' />
              <span>Cart</span>
            </Link>
          </li>
          <li className='flex cursor-pointer items-center  hover:bg-gray-100'>
            <div className='w-full px-8 py-4'>
              <FontAwesomeIcon icon={faCog} className='mr-4' />
              <span>Setting</span>
            </div>
          </li>
        </ul>
      </div>
      <button
        className='flex w-full items-center justify-center border-t border-gray-200 bg-white px-8 py-4 hover:bg-gray-249'
        onClick={handleLogout}
      >
        <FontAwesomeIcon icon={faSignOutAlt} className='mr-4' />
        <span>Logout</span>
      </button>
    </div>
  )
}

export default Sidebar
