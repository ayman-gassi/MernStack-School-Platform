import {Routes,Route} from "react-router-dom"
import Login from "./Components/Auth/Login";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Navbar from "./Components/BodyParts/NavBar";
import Home from "./Components/Home/Home";
import QuestionContainer from "./Components/Question/QuestionContainer";
import QuizDetail from "./Components/Question/QuizDetail";
import QuizStart from "./Components/Question/QuizStart";
import Profil from "./Components/Profil/Profil";
import MyExams from "./Components/QuestionResult/MyExams";
function App() {
  return (
      <>
         <Routes>
            <Route path="/" element={<Login></Login>}/>
            <Route path="/Home"  element={<Navbar></Navbar>}>
                <Route path=""  element={<Home></Home>} />
                <Route path="Questions"  element={<QuestionContainer></QuestionContainer>} />
                <Route path="Profil"  element={<Profil></Profil>} />
                <Route path="MyExams"  element={<MyExams></MyExams>}/>
            </Route>
            <Route path="/Quiz"  element={<QuizDetail></QuizDetail>} />
            <Route path="/Quiz/start"  element={<QuizStart></QuizStart>}/>
            <Route path="*"  element={<PageNotFound></PageNotFound>} />
        </Routes>
      </>
  );
}

export default App;
