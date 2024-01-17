import { TrashIcon } from "@heroicons/react/24/outline";
export default function MyExams(props){
    return(
        <>
        <div className="relative group bg-gray-900 py-10 sm:py-10 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
            <img className="w-20 h-20 object-cover object-center rounded-full" src={props.Pic} alt="pic" />
            <h4 className="text-white text-2xl font-bold capitalize text-center">{props.Name}</h4>
            <h5 className="text-white text-sm font-bold capitalize text-center">{props.FieldName}</h5>
            <p className="text-white/50">{props.Qnbr} Questions</p>
            <div  className="items-center">
            <button onClick={() =>{props.HandleAlert(props.id)}} className="w-full relative inline-flex items-center justify-center p-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-red-600 rounded-lg shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
                <TrashIcon className="h-6 w-6 " />
                </span> 
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Delete</span>
                <span  className="relative invisible">Delete</span>
            </button>
            </div>
           
        </div>
        </>
    )
}