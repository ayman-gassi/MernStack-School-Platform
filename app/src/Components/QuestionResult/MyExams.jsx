import axios from 'axios';
import { useState , useEffect } from "react";
export default function MyExams(){
    const [Grades,setGrades] =useState([])
    useEffect( ()=>{
          const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:3000/api/getGrade');
              setGrades(response.data)
            } catch (error) {
              console.error(error);
            }
          };
          fetchData();
    },[])
    return(
        <>
<div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-20">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Exam
                </th>
                <th scope="col" class="px-6 py-3">
                    Grade
                </th>
            </tr>
        </thead>
        <tbody>
        {Grades.map(item => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.ExamName}
                </th>
                <td class="px-6 py-4">
                    {item.grade}
                </td>
            </tr>
        ))}
        </tbody>
    </table>
</div>
        </>
    )
}