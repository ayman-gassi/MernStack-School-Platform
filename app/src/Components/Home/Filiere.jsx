import { NavLink } from "react-router-dom"
import { BookOpenIcon } from "@heroicons/react/24/outline";
export default function Filiere(props){
    return(
        <>
         <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <NavLink to="/Home/Questions" className="pl-4" >
                  <img className="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.PicSrc} alt="Description" />
              </NavLink>
              <div className="p-4">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.Name}
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{props.Desc}</p>
                  <p className="flex items-center  mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"><BookOpenIcon class="h-6 w-6 text-gray-500 mr-1" />{props.Qnbr}</p>
                  <NavLink to={`/Home/${props.Name}`} ><button type="button" className="w-full text-sky-500 hover:text-white border border-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center "> Voir </button></NavLink>
              </div>
          </div> 
        </>
    )
}