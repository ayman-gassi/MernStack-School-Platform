import { NavLink } from "react-router-dom";
import Sql from "../../Assets/img/SQL.jpeg"
import { DocumentTextIcon ,UserIcon  } from "@heroicons/react/24/outline";
export default function Question (){
    return(
        <>
	        <div class="p-6 shadow-md">
                <img class="object-cover object-center w-full mb-5 lg:h-48 md:h-36 rounded-xl" src={Sql} alt="blog"/>

                <h1 class="mx-auto mb-3 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">SQL.</h1>
                <p class="mx-auto text-base leading-relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>  
                <p class="flex items-center mx-auto text-base leading-relaxed text-gray-500 mt-1">
                <UserIcon class="h-6 w-6 text-gray-500 mr-1" /> Ayman Gassi
                </p> 
                <p class="flex items-center mx-auto text-base leading-relaxed text-gray-500 mt-1">
                    <DocumentTextIcon class="h-6 w-6 text-gray-500  mr-1" /> 10 Questions
                </p>             
                <div class="mt-4">
                    <NavLink to="/Quiz" class="mt-2"> <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm  py-2.5 text-center">Acceder</button></NavLink>
                </div>
            </div>
        </>
    )
}