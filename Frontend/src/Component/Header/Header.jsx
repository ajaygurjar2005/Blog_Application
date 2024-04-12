import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const MenuItems = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
    {
      name: 'Logout',
      link: '/login'
    },
    {
      name: 'Sign up',
      link: '/login'
    }
  ];

  return (
    <div>
      <header className="w-full mt-5 text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font md:block hidden">
        <div className="container flex flex-col items-start justify-between p-4 mx-auto md:flex-row ">
          <h1 className='text-[25px]  font-bold pl-4'>Blog application</h1>
          <nav className="flex flex-wrap items-center justify-center  text-base md:ml-auto md:mr-auto text-[20px] md:block hidden">
            <Link to="/" className="mr-5 font-medium hover:text-gray-900 hover:underline">
              Home
            </Link>
            <Link to="/about" className="mr-5 font-medium hover:text-gray-900 hover:underline">
              About
            </Link>
            <Link to="/contact" className="font-medium hover:text-gray-900 hover:underline">
              Contact
            </Link>
          </nav>
          <div className="items-center h-full">
            <Link to={"/login"} className="mr-5 font-medium hover:text-gray-900 hover:underline">
              Logout
            </Link>
            <Link to={"/login"} className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <div className='w-full h-[150px] flex md:hidden block'>
      <h1 className='text-[35px]  font-bold pl-4 ml-[30px] mt-8 w-[290px] '>Blog application</h1>
        <div>
          <ul className={`md:hidden  fixed w-screen h-[100vh] bg-[rgba(0,0,0,0.7)] text-white flex flex-col   items-center   pt-6  duration-300 top-[0px] ${toggle ? 'left-[0%]' : 'left-[-100%]'}`}>
            {MenuItems.map((data, index) => (
              <li key={index} className='hover:underline  mt-20 text-[25px] cursor-pointer'>
              <Link to={data.link} >{data.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {toggle ? (
          <AiOutlineClose style={{ zIndex: '100' }} className='text-[30px]   md:hidden text-[white] ml-[130px] mt-[50px]' onClick={() => setToggle(false)} />
        ) : (
          <AiOutlineMenu onClick={() => setToggle(true)} className='md:hidden  text-[black] text-[30px] ml-[130px] mt-[50px]' />
        )}
      </div>
    </div>
  );
};

export default Header;
