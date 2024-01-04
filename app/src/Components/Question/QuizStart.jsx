import QuestionLine from "../Question/QuestionLine"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState , useEffect } from "react";
export default function QuizStart(){
    let { name } = useParams();
    const [currentQcm,setCurrentQcm] = useState([]);
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/start/'+name);
          setCurrentQcm(response.data)
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    },[])
        return(
            <>
            <div class="bg-white border rounded-lg px-9 py-6 mx-auto my-8 max-w-5xl">
                <h2 class="text-2xl font-medium mb-4">{name}</h2>
                <form>
                    <QuestionLine  Question="das" choice1 ="f"  choice2 ="f" choice3 ="f" choice4 ="f"  />
                    <div>
                        <button type="submit" class=" w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
                    </div>
                </form>
            </div>
            </>
        )
}