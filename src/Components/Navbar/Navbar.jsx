'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { data: session,status } = useSession()
    console.log(session)
  const pathname = usePathname();
const router = useRouter();
  const navLinkClass = (path) =>
    pathname === path
      ? 'text-[#f5bf42] underline font-bold'
      : 'hover:text-[#f5bf42] hover:underline';


     

const handleLogout = async () => {
  toast.info("Logged out");

  await signOut({
    redirect: false,
  });

  window.location.href = "/";
};

  return (
   <div className="bg-base-100">
     <div className="navbar  shadow-sm max-w-7xl mx-auto">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <Link href="/" className={navLinkClass('/')}>Home</Link>
            </li>
            <li>
              <Link href="/products" className={navLinkClass('/products')}>
                Products
              </Link>
            </li>
            {session && <>
             <li>
              <Link href="/addProduct" className={navLinkClass('/addProduct')}>
               Add Product
              </Link>
            </li>

            </>}
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-xl">
          SportsKit
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className={navLinkClass('/')}>Home</Link>
          </li>
          <li>
            <Link href="/products" className={navLinkClass('/products')}>
              Products
            </Link>
          </li>
          {session && <>
             <li>
              <Link href="/addProduct" className={navLinkClass('/addProduct')}>
               Add Product
              </Link>
            </li>

            </>}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        
      {session?( <button onClick={handleLogout} className='btn  btn-primary'>
          LogOut
        </button>):
        <button onClick={()=>signIn()} className='btn btn-outline btn-primary'>
        Login
      </button>}
       
      </div>
    </div>
   </div>
  );
};

export default Navbar;
