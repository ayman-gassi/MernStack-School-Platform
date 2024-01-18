import { EnvelopeOpenIcon ,BriefcaseIcon ,UserIcon , AcademicCapIcon} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios  from 'axios';
import Male from "../../Assets/img/teacherM.png";
import Female from "../../Assets/img/teacherF.png";
export default function SuperProfil(){
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
    return(
        <>
		      <style>{`
        .IUY{
            overflow-y: scroll;
        }
        .IUY::-webkit-scrollbar {
            width: 5px;
            border-radius: 10px;
			}
      `}</style>
<h3 className="text-3xl font-extralight text-white/50 mt-1">Profil</h3>
<div className="IUY h-96 mb-3 w-full mt-5 flex justify-center items-center ">
<div className="w-full h-full p-8 justify-center sm:flex sm:space-x-6  dark:text-gray-100">
	<div className="flex-shrink-0 w-full mb-6 h-56 sm:h-52 sm:w-52 sm:mb-0">
		{Data.Gender==="Male"?<img className="object-cover object-center w-full h-full rounded dark:bg-gray-500" src={Male} alt='front'/>:<img className="object-cover object-center w-full h-full rounded dark:bg-gray-500" src={Female} alt='front'/>}
	</div>
	<div className="flex flex-col space-y-5">
		<div>
			<h2 className="text-3xl text-gray-300 font-semibold">{Data.FirstName} {Data.LastName}</h2>
			<span className="text-sm text-gray-400  flex items-center"><BriefcaseIcon class="h-6 w-6 mr-2 text-gray-400" />{Data.Job}</span>
		</div>
		<div className="space-y-3">
			<span className="flex items-center space-x-2 text-gray-300">
                <EnvelopeOpenIcon class="h-6 w-6" />
				<span >{Data.Email}</span>
			</span>
			<span className="flex items-center space-x-2 text-gray-300">
                <AcademicCapIcon class="h-6 w-6" />
				<span >University of technologie of Essaouira</span>
			</span>
            <span className="flex items-center space-x-2 text-gray-300">
                <UserIcon class="h-6 w-6" />
				<span >{Data.Gender}</span>
			</span>
		</div>
	</div>
</div>
</div>
        </>
    )
}