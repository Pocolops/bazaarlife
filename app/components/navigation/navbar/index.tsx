'use client'
import React, { Fragment, useContext } from 'react';
import { navOptions, styles } from '../common';
import CommonModal from '../../CommonModal';
import { GlobalContext } from '../../Context';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/default.png';

const authUser = true;
const authUserName = 'john';

function NavItems({ isModalView = false }) {
  return (
    <div
      className={`items-center justify-between w-full md:flex md:w-auto ${
        isModalView ? '' : 'hidden'
      }`}
      id="nav-items"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
        {navOptions.map((item) => (
          <li
            className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
            key={item.id}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Navbar = () => {

  const context = useContext(GlobalContext);
  const showNavModal = context?.showNavModal ?? false;
  const setShowNavModal = context?.setShowNavModal ?? false;

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl md:w-auto flex flex-wrap items-center justify-between mx-auto py-4">
          <div className="flex items-center cursor-pointer">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              <Link href='/'><Image src={logo} alt="Logo" width={200} /></Link>
            </span>
          </div>
          <div className="flex md:order-2 gap-2">
            {authUser ? (
              <Fragment>
                <div className="pl-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300">
                    {/* Insert your avatar image here */}
                  </div>
                  <span>Hello, {authUserName}</span>
                </div>
                <button className={styles.button}>Cart</button>
                <button className={styles.button}>Sell</button>
              </Fragment>
            ) : null}
            {authUser ? (
              <Link href="/login">
                <button className={styles.button}>Logout</button>
              </Link>
            ) : (
              <Link href="/login">
                <button className={styles.button}>Login</button>
              </Link>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              
              aria-expanded="false"
              onClick={() => setShowNavModal(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <NavItems isModalView={false} />
        </div>
      </nav>
      <CommonModal
        modalTitle=''
        showModalTitle={false}
        mainContent={<NavItems isModalView={true} />}
        show={showNavModal}
        setShow={setShowNavModal}
      />
    </>
  );
};

export default Navbar;
