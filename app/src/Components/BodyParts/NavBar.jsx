import { NavLink, Outlet } from "react-router-dom";
import studentM from "../../Assets/img/studentM.png"
import "../../Assets/css/NavBar.css";
const Navbar = () => {
    return (
        <>
            <nav className="navbar" >
              <ul>
                  <li className="logo">
                          <img src={studentM} alt="dfsd" />
                          <div className="info" >
                               <span >fsdfs</span>
                               <p >fsdfs</p>
                          </div>  
                  </li>
                  <li className="item" >
                       <NavLink>
                          <i className="fa-solid fa-house"></i>
                          <span className="nav-item">Home</span>
                       </NavLink>
                  </li>
                  <li className="item" >
                       <NavLink>
                          <i className="fa-solid fa-user"></i>
                          <span className="nav-item">Profil</span>
                       </NavLink>
                  </li>
                  <li className="item" >
                       <NavLink>
                          <i className="fa-solid fa-scroll"></i>
                          <span className="nav-item">My Exams</span>
                       </NavLink>
                  </li>
                  <li className="item" >
                       <NavLink>
                          <i class="fa-solid fa-clipboard"></i>
                          <span className="nav-item">My note</span>
                       </NavLink>
                  </li>
                  <li className="logout">
                       <NavLink>
                          <i class="fa-solid fa-right-from-bracket"></i>
                          <span className="nav-item">Log Out</span>
                       </NavLink>
                  </li>
              </ul>
            </nav>
            <Outlet></Outlet>
        </>
    )
}
export default Navbar