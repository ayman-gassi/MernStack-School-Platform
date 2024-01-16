import { NavLink, useParams } from 'react-router-dom';
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import QuestionForm from './QuestionForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function AddExam(){
    const [Question, setQuestions] = useState([]);
    const [QuestionData, setQuestionData] = useState([]);
    const [ExamName, setExamName] = useState('');
    const [ExamDuree, setExamDuree] = useState(0);
    const [ExamDesc, setExamDesc] = useState('');
    const [QuestionNbr,setQuestionNbr] = useState(0);
    const navigate = useNavigate();
    const AddQuestion = (e) => {
      e.preventDefault(); 
      setQuestions([...Question,<QuestionForm key={QuestionNbr+1} id={QuestionNbr+1} handleQuestionData={handleQuestionData} deleteExam={deleteExam}/>]);
      setQuestionNbr(QuestionNbr+1);
    };
    const deleteExam = (index) => {
        const updatedQuestions = Question.filter((exam, i) => i !== index);
        setQuestions(updatedQuestions);
        const updatedQuestionsData = QuestionData.filter((exam, i) => i !== index);
        setQuestionNbr(Question.length);
        setQuestionData(updatedQuestionsData);
      };
      const handleQuestionData = (data) => {
        setQuestionData([...QuestionData,data]);
      };   
    const addExam = async() => {
        try{
          const User = await axios.post('http://localhost:3000/api/userinfo');
          const Data = {
            FieldName : Field, 
            Teacher : User.data.FirstName + " " + User.data.LastName,
            ExamName : ExamName,
            ExamDesc : ExamDesc,
            ExamDuree : ExamDuree,
            Questions : QuestionData
        }
          const result =  await axios.post('http://localhost:3000/SuperApi/createExam', Data);
          if(result.data === true){
            navigate('/Admin/Dashboard');
          }
          else{
            alert("Error")
          }
        }catch(err){
            alert(err)
        }
   
    } 
    let { Field } = useParams();
    return(
        <>
        <style>{`
        .IUY{
            overflow-y: scroll;
        }
        .IUY::-webkit-scrollbar {
            width: 5px;
            border-radius: 10px;
            background: white;
        }
        .IUY::-webkit-scrollbar-thumb {
            background: grey;
            border-radius: 10px;
            border: 1px solid #aeaeb5
        }
      `}</style>
<h3 className="text-3xl font-extralight text-white/50 mt-1"> <NavLink to="/Admin/Dashboard" >All Fields</NavLink> {'>'} <NavLink to={`/Admin/AddExam/${Field}`} >{Field}</NavLink></h3>
<div className="IUY h-96 mb-1 w-full mt-5 flex  items-center ">
<form className="w-full  h-full p-10">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-1/2  px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-zinc-400 text-xs font-bold mb-2" for="grid-first-name">
        -Exam Name
      </label>
      <input onChange={(e)=>{setExamName(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" required type="text"/>
    </div>
    <div className="w-1/2  px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-zinc-400 text-xs font-bold mb-2" for="grid-first-name">
        -Duree
      </label>
      <input onChange={(e)=>{setExamDuree(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" required type="Number"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-zinc-400 text-xs font-bold mb-2" for="grid-password">
        -description
      </label>
      <textarea onChange={(e)=>{setExamDesc(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded resize-none  h-24 py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
    </div>
  </div>
  <label className="block uppercase tracking-wide text-zinc-400 text-xs font-bold mb-2" for="grid-password">
        -Questions {`( ${QuestionNbr} )`}
 </label>
            {Question.map( (item,index) => (
                    <div key={index}  >
                        {item}
                    </div>
              ))}
              {QuestionData.map( (item,index) => (
                    <div key={index}  >
                        <p>{item.Correct}</p>
                    </div>
              ))}
  <div className="flex justify-center mt-5" >
         <button onClick={AddQuestion} className="bg-gray-900 text-white/50 p-2 rounded-md flex items-center justify-center">
            <PlusIcon class="h-6 w-6 text-gray-500 mr-1" /> Add Question 
          </button>
  </div>
  <button onClick={addExam} type="submit" class="text-white mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm w-full py-3 text-center me-2 mb-2">Add Exam</button>
</form>
      </div>
        </>
    )
}