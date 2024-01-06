import QuestionLine from "../Question/QuestionLine"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState , useEffect } from "react";
import ResultSection from "./ResultSection";
export default function QuizStart(){
    let { name } = useParams();
    const navigate = useNavigate();
    const [currentQcm,setCurrentQcm] = useState([]);
    const [remainingTime, setRemainingTime] = useState(null)
    const [selectedChoices, setSelectedChoices] = useState({});
    const [Finish, setFinish] = useState(false)
    const [total, setTotal] = useState("")
    const handleChoiceSelection = (question, selectedOption) => {
      setSelectedChoices(prevChoices => ({
        ...prevChoices,
        [question]: selectedOption
      }));
    };
    const Result = async() => {
      let Total = 0;
      currentQcm.forEach(item => {
        const Ques = item.Text;
        item.Responses.forEach(response => {
          if (response.Text === selectedChoices[Ques] && response.IsCorrect === true) {
            Total += 1;
          }
        });
      });
      try {
        let finalGrade = Total + '-' + currentQcm.length;
        const response = await axios.post('http://localhost:3000/api/saveGrade/'+name +"/"+finalGrade);
        if(response.data === true ){
            setTotal(Total)
            setFinish(true)
        }
      } catch (error) {
        console.error(error);
      }
    };
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
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
      const handleBeforeUnload = (event) => {
      if (remainingTime > 0) {
        event.returnValue = window.confirm();
      }
    };
  
      window.addEventListener('beforeunload',handleBeforeUnload);
        return(
            <> 
        {Finish === false?(
            <>
            <div class=" w-full bg-white fixed text-center py-4 lg:px-4">
                <div class="p-2 bg-indigo-800 items-center  text-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                  <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">remaining Time</span>
                  <span class="font-semibold mr-2 text-left flex-auto">{formatTime(remainingTime)}</span>
                </div>
            </div>
            <div class="bg-white border rounded-lg px-9 py-6 mx-auto my-8 max-w-5xl">
                <h2 class="text-2xl font-medium mb-4">{name}</h2>
                <form>
                    {currentQcm.map(item => (
                        <>
                        <QuestionLine 
                          key={item.id} 
                          Question={item.Text} 
                          choice1 ={item.Responses[0].Text} 
                          choice2 ={item.Responses[1].Text} 
                          choice3 ={item.Responses[2].Text}
                          choice4 ={item.Responses[3].Text} 
                          onChoiceSelect={handleChoiceSelection}  />
                        </>
                    ))}
                    <div>
                        <button onClick={Result} type="button" class=" w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
                    </div>
                </form>
            </div>
            </>
          ):(
             <ResultSection grade={total}  Count={currentQcm.length} />
          )}

            </>
        )
}