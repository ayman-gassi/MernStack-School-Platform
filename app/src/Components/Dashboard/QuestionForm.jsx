import { XCircleIcon ,CheckBadgeIcon} from "@heroicons/react/24/outline";
import { useState } from "react";
export default function QuestionForm(props){
    const [QuestionTitle,setQuestionTitle]=useState('');
    const [Correct,setCorrect]=useState('');
    const [False1,setFalse1]=useState('');
    const [False2,setFalse2]=useState('');
    const [False3,setFalse3]=useState('');
    const [save,setSave] = useState(true);
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    const Save = ()=>{
        setSave(!save)
        const data = {
            Text : QuestionTitle,
            Responses: [
              { Text: Correct, IsCorrect: true },
              { Text: False1, IsCorrect: false },
              { Text: False2, IsCorrect: false },
              { Text: False3, IsCorrect: false }
          ] 
        }
        data.Responses = shuffleArray(data.Responses)
        props.handleQuestionData(data);
    }
    return(
        <>
<div className="flex  flex-wrap -mx-4 mb-2">
  <div className="w-full  px-3 mb-6 md:mb-0">
      <label className="block uppercase flex items-center tracking-wide text-zinc-500 text-xs font-bold mb-2" for="grid-first-name">
          <button type="button" onClick={()=>{props.deleteExam(props.id)}} className="mr-2  bg-red-500 text-white/50 p-1 rounded-md flex items-center justify-center">
            <XCircleIcon class=" h-4 w-4 text-white " /> 
          </button>
          {save && (
            <button type="button" onClick={Save} className="mr-2 bg-green-500 text-white/50 p-1 rounded-md flex items-center justify-center">
              <CheckBadgeIcon className="h-4 w-4 text-white" />
            </button>
          )}

          Write question {props.id}
      </label>
      <input  {...(save === true ? { disabled: false } : { disabled: true } )} onChange={(e)=>{setQuestionTitle(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" required type="text"/>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-zinc-500 text-xs font-bold mb-2" for="grid-city">
        Correct Answer
      </label>
      <input  {...(save === true ? { disabled: false } : { disabled: true } )} onChange={(e)=>{setCorrect(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required type="text"/>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-zinc-500 text-xs font-bold mb-2" for="grid-zip">
        Wrong Answer 1
      </label>
      <input {...(save === true ? { disabled: false } : { disabled: true } )} onChange={(e)=>{setFalse1(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required type="text"/>
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-zinc-500 text-xs font-bold mb-2" for="grid-zip">
      Wrong Answer 2
      </label>
      <input  {...(save === true ? { disabled: false } : { disabled: true } )} onChange={(e)=>{setFalse2(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required type="text" />
    </div>
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-zinc-500 text-xs font-bold mb-2" for="grid-zip">
      Wrong Answer 3
      </label>
      <input  {...(save === true ? { disabled: false } : { disabled: true } )} onChange={(e)=>{setFalse3(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required type="text" />
    </div>
  </div>
        </>
    )
}