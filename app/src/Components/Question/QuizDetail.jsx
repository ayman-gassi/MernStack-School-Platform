import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useState , useEffect } from "react";
import { useParams } from 'react-router-dom';
export default function QuizDetail() {
  let { name } = useParams();
  const [currentExam,setCurrentExam] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getExam/'+name);
        setCurrentExam(response.data)
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  },[])
  return (
    <div className='p-20'>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">{currentExam.Name} Quiz</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">details de ce examen</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Prof</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{currentExam.Teacher}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Nombre de Question</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{currentExam.Qnbr} Questions</dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Duree</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{currentExam.Duree}  min</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Sujet</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {currentExam.Desc}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Commencer</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <NavLink to={`/Quiz/start/${currentExam.Name}`} ><button type="button" class="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Commencer le Test</button></NavLink>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
