import MyExams from "./MyExam";
import { useState ,useEffect } from "react";
import axios  from "axios";
import ConfirmAlert from "../Alerts/ConfirmAlert";
import {  useNavigate } from "react-router-dom";
export default function Main(){
    const navigate = useNavigate();
    const [AllFields,setAllFields] = useState([]);
    const [AlertText,setAlertText] = useState('');
    const [AlertStatus,setAlertStatus] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const Info = await axios.post('http://localhost:3000/api/userinfo');
                const dt = await axios.get('http://localhost:3000/SuperApi/getAllFieldsByTeacher/' + Info.data.FirstName + " " + Info.data.LastName);
                setAllFields(dt.data);
            } catch (err) {
                console.log(err);
            }
        };
    
        fetchData();
    }, []);
    const action = () => {
        setAlertStatus(false);
    }
    const HandleAlert = (index) => {
            setAlertText(AllFields[index].Name+" "+AllFields[index].FieldName)
            setAlertStatus(true)
    }
    const Delete = async(Name) => {
        try{
        let st = Name.split(' ');
         const data = {
            Exam :st[0],
            Field : st[1]
         }
         const result = await axios.post('http://localhost:3000/SuperApi/DeleteExam/',data);
         if(result.data === true ){
            window.location.reload();
         }
        }catch(err){
            alert(err)
        }
    }
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
      <h3 className="text-3xl font-extralight text-white/50 mt-1">My Exams</h3>
      <div className="IUY max-h-96 mb-10 sm:mb-0 mt-5 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {AllFields.length > 0 && (
        AllFields.map((item,index) => (
                <MyExams key={item.id} id={index} Name={item.Name} FieldName={item.FieldName}  Pic={item.PicSrc}  Qnbr={item.Qnbr}   HandleAlert={HandleAlert} ></MyExams>
            ))
        )}
      </div>
      {AlertStatus && 
        <ConfirmAlert Name={AlertText} Delete={Delete}  action={action} ></ConfirmAlert>
      }
        </>
    )
}
