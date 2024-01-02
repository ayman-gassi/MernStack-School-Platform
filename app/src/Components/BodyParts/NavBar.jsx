import React, { useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../Assets/img/Logo.png"
import "../../Assets/css/NavBar.css"
const NavBar = () => {  
     const [Mobile,setMobile] = useState(false);      
    return (
     <>
        <nav class="z-50 w-full fixed px-4 py-4 flex justify-between items-center bg-white shadow-md">
                <NavLink to="/Home" class="text-3xl font-bold leading-none" href="#">
                    <img class='w-10'  src={Logo}  />
		      </NavLink>
		<div class="lg:hidden">
			<button onClick={() => setMobile(!Mobile)} class="navbar-burger flex items-center text-blue-600 p-3">
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li class="text-sm text-gray-400 hover:text-sky-600 font-bold" ><NavLink to="/Home"  >Home</NavLink></li>
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li  class="text-sm text-gray-400 hover:text-sky-600 font-bold"  ><NavLink to="/Home/MyExams" >My Exams</NavLink></li>
               <li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
               <li class="text-sm text-gray-400 hover:text-sky-600 font-bold"  ><NavLink to="/Home/Profil"  href="#">Profil</NavLink></li>
		</ul>
          <div class="SwitchButtuns">
               <NavLink to=""><button class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" > Log Out <i class="fa-solid fa-right-from-bracket ml-1"></i> </button></NavLink>
          </div>
	</nav>
     {Mobile? (
          <div class="navbar-menu relative z-50 ">
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div class="flex items-center justify-between mb-8">
				<NavLink to="/Home" class="mr-auto text-3xl font-bold leading-none">
                            <img class='w-10'  src={Logo}  />
				</NavLink>
				<button onClick={()=>{setMobile(!Mobile)}} class="navbar-close">
					<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li class="mb-1">
                         <NavLink to="/Home"  ><button class="w-full block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Home</button></NavLink>
					</li>
					<li class="mb-1">
                         <NavLink to="/Home/MyExams"  ><button  class="w-full block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >My Exams</button></NavLink>
					</li>
                         <li class="mb-1">
                         <NavLink to="/Home/Profil"  ><button  class="w-full block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Profil</button></NavLink>
					</li>
				</ul>
			</div>
			<div class="mt-auto">
				<div class="pt-6">
                    <NavLink to=""> <p class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Log Out <i class="fa-solid fa-right-from-bracket ml-1"></i></p></NavLink>
				</div>
			</div>
		</nav>
     </div>
     ):null}
	 <div>
	 <Outlet></Outlet>
	 </div>
        
     </>
    )
}
export default NavBar;