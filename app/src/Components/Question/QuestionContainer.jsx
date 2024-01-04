
import { BookOpenIcon } from "@heroicons/react/24/outline";
import Quiz from "./Quiz";
import "../../Assets/css/Question.css"
import { useParams } from 'react-router-dom';
import { useState , useEffect } from "react";
import axios from 'axios';
import DataNotFound from '../BodyParts/DataNotFound';
export default function QuestionContainer() {
  let { name } = useParams();
  const [CurrentField,setCurrentField] = useState([]);
  const [Exam,setExam] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getField/'+name);
        setCurrentField(response.data.Field);
        setExam(response.data.Exam);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  },[])
  return (
    <>
    <div className="InfoFiliere relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-sky-500">Filiere</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{CurrentField.Name}</h1>
              <p className="mt-6 text-base leading-7 text-gray-700 lg:max-w-lg">
                {CurrentField.Desc}
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                <BookOpenIcon class="mt-1 h-5 w-5 flex-none text-sky-500" aria-hidden="true"/>
                  <span>
                    <strong className="font-semibold text-gray-900">{CurrentField.Enbr} Exams</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[40rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            src={CurrentField.PicSrc}
            alt="dsadsa"
          />
        </div>
      </div>
    </div>
    <div className="QuestionContainer mt-15 mb-4">
            <div class="relative items-center w-full mx-auto md:px-12 lg:px-24 max-w-7xl">
                <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                {Exam.length > 0 ? (
                    Exam.map(item => (
                      <Quiz key={item.id}  Name={item.Name}  PicSrc={item.PicSrc}  Teacher={item.Teacher}  Qnbr={item.Qnbr}   />
                    ))
                ):(
                    <DataNotFound  title = "No Exams Found" />
                 )}
                </div>
            </div>

    </div>
    </>
  )
}
