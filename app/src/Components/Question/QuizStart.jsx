import QuestionLine from "../Question/QuestionLine"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState , useEffect } from "react";
export default function QuizStart(){
    let { name } = useParams();
    const navigate = useNavigate();
    const [currentQcm,setCurrentQcm] = useState([]);
    const [remainingTime, setRemainingTime] = useState(null)
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:3000/api/start/'+ name);
          setCurrentQcm(response.data.Questions)
          setRemainingTime(response.data.Duree  * 60 )
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
      const interval = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime <= 0) {
            clearInterval(interval);
            return navigate('/Home');
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    },[])
      window.addEventListener('beforeunload',alert("You Are in a test"));
      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };
        return(
            <>
        <div>
          <p>Remaining Time: {formatTime(remainingTime)}</p>
        </div>
            <div class="bg-white border rounded-lg px-9 py-6 mx-auto my-8 max-w-5xl">
                <h2 class="text-2xl font-medium mb-4">{name}</h2>
                <form>
                    {currentQcm.map(item => (
                        <QuestionLine key={item.id}  Question={item.Text} choice1 ={item.Responses[0].Text} choice2 ={item.Responses[1].Text} choice3 ={item.Responses[2].Text}choice4 ={item.Responses[3].Text}  />
                    ))}
                    <div>
                        <button type="button" class=" w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
                    </div>
                </form>
            </div>
            </>
        )
}