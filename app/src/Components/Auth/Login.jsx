import '../../Assets/css/Auth.css'
import Logo from '../../Assets/img/Logo.png'
import Este from '../../Assets/img/ESTE.png'
 const Navbar = () => {
    return (
        <>
        <div className="Ctrn">
          <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
              <div class="ESTE hidden lg:block lg:w-1/2">
                 <img alt="pic" src={Este} />
              </div> 

              <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
                  <div class="flex justify-center mx-auto">
                      <img  alt="pic" class="w-auto h-7 sm:h-20" src={Logo} />
                  </div>

                  <p class="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                      Welcome back!
                  </p>
                  <div class="mt-4">
                      <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                      <input id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                  </div>

                  <div class="mt-4">
                      <div class="flex justify-between">
                          <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                      </div>

                      <input id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                  </div>

                  <div class="mt-6">
                      <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                          Sign In
                      </button>
                  </div>

                  <div class="flex items-center justify-between mt-4">
                      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                      <a href="#" class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a>

                      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                  </div>
              </div>
          </div>
        </div>
        </>
    )
}
export default Navbar