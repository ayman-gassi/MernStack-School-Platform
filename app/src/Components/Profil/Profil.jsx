
import Background from "../../Assets/img/LoginBackGround.jpg"
import User from "../../Assets/img/studentM.png"
export default function Profil(){
    return(
        <>
<div class="max-w-2xl  mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
    <div class="rounded-t-lg h-32 overflow-hidden">
        <img class="object-contain object-top w-full" src={Background} alt='Mountain'/>
    </div>
    <div class="mx-auto w-32 h-32 relative  bg-white -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src={User} alt='Woman looking front'/>
    </div>
    <div class="text-center mt-2 pb-5">
        <h2 class="font-semibold">Ayman GASSI</h2>
        <p class="text-gray-500  mb-1"><strong>Gender : </strong>Male</p>
        <p class="text-gray-500  mb-1"><strong>Code apogee : </strong>21292929</p>
        <p class="text-gray-500 mt-5 mb-1"><i class="fa-solid fa-briefcase mr-1 "></i>Student</p>
        <p class="text-gray-500 mb-1"><i class="fa-solid fa-building-columns mr-1"></i>Hight School of Technologie of Essaouira </p>
        <p class="text-gray-500"><i class="fa-solid fa-envelope mr-1"></i>Aymangassi972003@mail.com</p>

    </div>
</div>
        </>
    )
}