import '../../Assets/css/Auth.css'
import Logo from '../../Assets/img/Logo.png'
import Este from '../../Assets/img/ESTE.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

 const Navbar = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [error, setError] = useState('');
    const [RegisterSection,setRegisterSection] = useState(false);
    const [LoginErrorSection,setLoginErrorSection] = useState(false);
    const [RegisterErrorSection,setRegisterErrorSection] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async () => {
        if(email === '' || password === ''){
            setLoginErrorSection(true);
            setError("Fill All the Blanks")
        }
        else{
            try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.success) {
                navigate('/Home');
            } else {
                setLoginErrorSection(true);
                setError("Email or Password incorrect")
            }
        } catch (error) {
            console.error('Error during login:', error);
            setLoginErrorSection(true);
            setError("Server Error")
        }
        }
    };
    const handleRegister = async () => {
        if(email === '' || password === '' || fullName === ''|| gender === ''){
            setRegisterErrorSection(true);
            setError("Fill All the Blanks")
        }
        else{
            try {
                const response = await axios.post('http://localhost:3000/api/register', {
                    fullName,
                    gender,
                    email,
                    password,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (response.data.success) {
                    navigate('/Home');
                } else {
                    console.error('Login failed:', response.data.message);
                    setRegisterErrorSection(true)
                    setError("User allready Exist")
                }
            } catch (error) {
                console.error('Error during login:', error);
                setRegisterErrorSection(true)
                setError("Server Error")
            }   
        }
       
    };
    return (
        <>
        <div className="Ctrn">
          <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
          
                <div class="ESTE hidden lg:block lg:w-1/2">
                     <img alt="pic" src={Este} />
                </div> 
                
            {RegisterSection===false?(
                <>
              <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
                  <div class="flex justify-center mx-auto">
                      <img  alt="pic" class="w-auto h-7 sm:h-20" src={Logo} />
                  </div>

                  <p class="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                      Welcome back!
                  </p>
                  
                  <div class="mt-4">
                      <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                      <input  onChange={(e)=>setEmail(e.target.value)}  id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                  </div>

                  <div class="mt-4">
                      <div class="flex justify-between">
                          <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                      </div>

                      <input  onChange={(e)=>setPassword(e.target.value)} id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                  </div>
                {LoginErrorSection && (
                    <div class="flex items-center p-4 mt-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                             {error}
                        </div>
                  </div>
                )}
                  <div class="mt-6">
                 <button onClick={handleLogin} class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                         Sign In
                      </button>
                  </div>

                  <div class="flex items-center justify-between mt-4">
                      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                      
                      <p  onClick={()=>{setRegisterSection(!RegisterSection); setLoginErrorSection(false);}} class="cursor-pointer text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</p>

                      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                  </div>
                  
              </div>
              </>
                ):(
                   <>
                   <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
                  <div class="mt-4">
                      <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Full Name</label>
                      <input  onChange={(e)=>setFullName(e.target.value)}  class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                  </div>
                  <div class="mt-4">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Gender</label>
                            <label for="color-red" class="block text-gray-700 font-medium mb-2">
                                <input  onClick={()=>{setGender("Male")}} type="radio" name="gender"  class="mr-2"/>Male
                            </label>
                            <label for="color-blue" class="block text-gray-700 font-medium mb-2">
                                <input onClick={()=>{setGender("Female")}} type="radio"  name="gender"  class="mr-2"/>Female
                            </label>
                  </div>
                  <div class="mt-4">
                      <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                      <input onChange={(e)=>setEmail(e.target.value)} class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                  </div>
                 
                  <div class="mt-4">
                      <div class="flex justify-between">
                          <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                      </div>

                      <input  onChange={(e)=>setPassword(e.target.value)} id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                  </div>
                  {RegisterErrorSection && (
                    <div class="flex items-center p-4 mt-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                             {error}
                        </div>
                  </div>
                )}
                  <div class="mt-6">
                  <button  onClick={handleRegister} class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                         Sign Up
                      </button>
                  </div>

                  <div class="flex items-center justify-between mt-4">
                      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                      <p  onClick={()=>{setRegisterSection(!RegisterSection); setRegisterErrorSection(false);}} class="cursor-pointer text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">Allready have account</p>

                      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                  </div>
                  
              </div>
                   </>
                )}
          </div>
        </div>
        </>
    )
}
export default Navbar