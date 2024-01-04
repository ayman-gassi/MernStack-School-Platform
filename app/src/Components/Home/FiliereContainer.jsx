import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import Filiere from "./Filiere";


export default function FiliereContainer (){
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
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 pt-10 dark:text-white">Filiere</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p>

                        
                    </div> 
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                            {AllFields.map(item => (
                                <Filiere key={item.id} Name={item.Name} PicSrc={item.PicSrc} Enbr={item.Enbr} Desc={item.Desc.substring(0, 56)} />
                            ))}
                    </div>  
                </div>
            </section>
           
        </>
    )
}