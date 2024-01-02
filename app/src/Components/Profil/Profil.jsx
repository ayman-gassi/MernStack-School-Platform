import React, { useState, useEffect } from 'react';
import Background from "../../Assets/img/LoginBackGround.jpg";
import User from "../../Assets/img/studentM.png";

export default function Profil() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/userinfo', {
          method: 'GET',
          credentials: 'include',
        })
          .then(response => response.json())
          .then(data => {
            console.log('User Data:', data.user);
            setUserData(data.user);
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      }, []);
    
      if (!userData) {
        return <div>Loading user data...</div>;
      }
    
    return (
        <>
            <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm xl:mx-auto bg-white shadow-xl rounded-lg text-gray-900">
                <div className="rounded-t-lg h-34 overflow-hidden">
                    <img className="object-contain object-top w-full" src={Background} alt='Mountain'/>
                </div>
                <div className="mx-auto w-32 h-32 relative bg-white -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img className="object-cover object-center h-32" src={User} alt='Woman looking front'/>
                </div>
                <div className="text-center mt-2 pb-5">
                        <>
                            <h2 className="font-semibold">{userData.name}</h2>
                            <p className="text-gray-500 mb-1"><strong>Gender :</strong> {userData.gender}</p>
                            <p className="text-gray-500 mb-1"><strong>Code apogee :</strong> {userData.codeApogee}</p>
                            <p className="text-gray-500 mt-5 mb-1"><i className="fa-solid fa-briefcase mr-1 "></i>{userData.role}</p>
                            <p className="text-gray-500 mb-1"><i className="fa-solid fa-building-columns mr-1"></i>{userData.school}</p>
                            <p className="text-gray-500"><i className="fa-solid fa-envelope mr-1"></i>{userData.email}</p>
                        </>
                </div>
            </div>
        </>
    );
}
