import { useState ,useEffect } from "react";
import axios  from "axios";
import Field from "./Field";
export default function Main(){
  const [AllFields,setAllFields] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/getAllFields');
          setAllFields(response.data);
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
            width: 10px;
        }
      `}</style>
      <h3 className="text-3xl font-extralight text-white/50 mt-1">Create Exam</h3>
        <div className="IUY max-h-96 mb-10 sm:mb-0 mt-5 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
       {AllFields.length > 0 && (
              AllFields.map(item => (
                  <Field key={item.id} Name={item.Name} PicSrc={item.PicSrc} Enbr={item.Enbr} />
               ))
        )}  
      </div>
        </>
    )
}