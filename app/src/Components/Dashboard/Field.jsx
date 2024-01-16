import { NavLink } from "react-router-dom";

export default function Field (props){
    return(
        <>
        <NavLink to={`/Admin/AddExam/${props.Name}`} className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
          <img className="w-20 h-20 object-cover object-center rounded-2xl" src={props.PicSrc} alt="pic" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">{props.Name}</h4>
          <p className="text-white/50">{props.Enbr} Quiz</p>
        </NavLink>
        </>
    )
}