import {Routes,Route} from "react-router-dom"
import Login from "./Components/Auth/Login";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Navbar from "./Components/BodyParts/NavBar";
function App() {
  return (
      <>
         <Routes>
            <Route path="/" element={<Login></Login>}/>
            <Route path="/Home"  element={<Navbar></Navbar>}>
                <Route path=""  element={<p>Filiere</p>} />
                <Route path="Questions"  element={<p>Questions</p>} />
                <Route path="Profil"  element={<p>Profil</p>} />
            </Route>
            <Route path="*"  element={<PageNotFound></PageNotFound>} />
        </Routes>
      </>
  );
}

export default App;
