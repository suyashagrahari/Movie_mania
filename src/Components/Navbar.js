import React from 'react';
import Country from '../Buttons/Country';
import Language from '../Buttons/Language';
import Search from '../Buttons/Search';

const Navbar = () => {
  return (
<>


<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
  <div class="max-w-screen-xl flex flex-wrap md:flex-wrap-back items-center justify-between mx-auto p-4 max-[550px]:justify-center ">
  <h1>Movies Mania</h1>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Search/>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <Country/>
    <Language/>
  </div>
  </div>
</nav>

</>);
};

export default Navbar;
