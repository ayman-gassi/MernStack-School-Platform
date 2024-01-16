import SideBar from "../BodyParts/SideBar";
import Logo from "../../Assets/img/teacherM.png"
import { Outlet } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from 'axios';

export default function  Dashboard (){
  const [currentTime, setCurrentTime] = useState(new Date());
  const [Email,setEmail] = useState('')
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []); 
  const formattedTime = `${currentTime.getHours()} : ${currentTime.getMinutes()}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/userinfo');
        setEmail(response.data.Email)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    
  }, []);
    return(
        <>
<div className="bg-gray-900 min-h-screen p-5 flex items-center justify-center">
    <div className="Dash bg-gray-800 flex-1 flex flex-col space-y-1 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
    <SideBar></SideBar>
    <div className="flex-1 px-2 sm:px-0 ">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-extralight text-white/50">{formattedTime}</h3>
        <div className="inline-flex items-center space-x-2">
          <p className="bg-gray-900 text-white/50 p-2 rounded-md flex items-center justify-center">
            <img className="h-6 w-6 mr-3" src={Logo} /> {Email}
          </p>
        </div>
      </div>
    <Outlet></Outlet>
    </div>
  </div>
</div>
        </>
    )
}