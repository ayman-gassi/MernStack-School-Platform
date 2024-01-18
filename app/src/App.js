import {Routes,Route,useNavigate} from "react-router-dom"
import Login from "./Components/Auth/Login";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Navbar from "./Components/BodyParts/NavBar";
import Home from "./Components/Home/Home";
import QuestionContainer from "./Components/Question/QuestionContainer";
import QuizDetail from "./Components/Question/QuizDetail";
import QuizStart from "./Components/Question/QuizStart";
import SuperProfil from "./Components/Dashboard/SuperProfil";
import Profil from "./Components/Profil/Profil";
import MyExams from "./Components/QuestionResult/MyExams";
import { useEffect} from "react";
import axios from 'axios';
import AdminContainer from "./Components/Dashboard/AdminContainer";
import Main from "./Components/Dashboard/Main";
import AllQuiz from "./Components/Dashboard/AllQuiz";
import AddExam from "./Components/Dashboard/AddExam";
function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/Connection');
        if(response.data.Exist === true){
          navigate('/');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[])
  return (
      <>
        <Routes>
                  <Route path="/" element={<Login></Login>}/>
                  <Route path="/Home"  element={<Navbar></Navbar>}>
                            <Route path=""  element={<Home></Home>} />
                            <Route path=":name"  element={<QuestionContainer></QuestionContainer>} />
                            <Route path="Profil"  element={<Profil></Profil>} />
                            <Route path="MyExams"  element={<MyExams></MyExams>}/>
                  </Route>
                  <Route path="/Quiz/prepare/:name"  element={<QuizDetail></QuizDetail>} />
                  <Route path="/Quiz/start/:name"  element={<QuizStart></QuizStart>}/>
                  <Route path="*"  element={<PageNotFound></PageNotFound>} />
                  <Route path="/Admin"  element={<AdminContainer> </AdminContainer>}   >  
                           <Route path="Dashboard" element={<Main></Main>}  />
                           <Route path="AddExam/:Field" element={<AddExam></AddExam>}  />
                           <Route path="MyExams" element={<AllQuiz></AllQuiz>}  />
                           <Route path="Profil" element={<SuperProfil></SuperProfil>}  />
                  </Route>
         </Routes>
      </>
  );
}

export default App;
