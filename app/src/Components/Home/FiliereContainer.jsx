
import Filiere from "./Filiere";

export default function FiliereContainer (){
    return (
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 pt-10 dark:text-white">Filiere</h2>
                        <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                    </div> 
                    <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                            <Filiere></Filiere>
                            <Filiere></Filiere>
                            <Filiere></Filiere>
                            <Filiere></Filiere>
                    </div>  
                </div>
            </section>
           
        </>
    )
}