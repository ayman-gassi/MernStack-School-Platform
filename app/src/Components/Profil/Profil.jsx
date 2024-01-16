import React, { useState, useEffect } from 'react';
import Background from "../../Assets/img/LoginBackGround.jpg";
import Male from "../../Assets/img/studentM.png";
import Female from "../../Assets/img/studentF.png";
import axios from 'axios';
export default function Profil() {
      const [Data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:3000/api/userinfo');
          setData(response.data)
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, []);
    
    return (
        <>
  
            <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm xl:mx-auto bg-white shadow-xl rounded-lg text-gray-900">
                <div className="rounded-t-lg h-34 overflow-hidden">
                    <img className="object-contain object-top w-full" src={Background} alt='Mountain'/>
                </div>
                <div className="mx-auto w-32 h-32 relative bg-white -mt-16 border-4 border-white rounded-full overflow-hidden">
                    {Data.Gender==="Male"?<img className="object-cover object-center h-32" src={Male} alt='front'/>:<img className="object-cover object-center h-32" src={Female} alt='front'/>}
                </div>
                <div className="text-center mt-2 pb-5">
                        <>
                            <h2 className="font-semibold">{Data.FirstName} {Data.LastName}</h2>
                            <p className="text-gray-500 mb-1"><strong>Gender :</strong> {Data.Gender}</p>
                            <p className="text-gray-500 mt-5 mb-1"><i className="fa-solid fa-briefcase mr-1 "></i>{Data.Job}</p>
                            <p className="text-gray-500 mb-1"><i className="fa-solid fa-building-columns mr-1"></i>University of technologie of Essaouira</p>
                            <p className="text-gray-500"><i className="fa-solid fa-envelope mr-1"></i>{Data.Email}</p>
                        </>
                </div>
            </div>
        </>
    );
}
