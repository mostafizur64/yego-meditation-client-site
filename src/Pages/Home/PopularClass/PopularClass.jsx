
import { useEffect, useState } from "react";

import SinglePopularClass from "./SinglePopularClass";

import AOS from "aos";

import 'aos/dist/aos.css'


const PopularClass = () => {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, [])
    const [popularClass, setPopularClass] = useState([])
    useEffect(() => {
        fetch('https://yoga-meditation-server-site.vercel.app/showPopularClass').
            then(res => res.json())
            .then(data => {
                setPopularClass(data)
            })
    }, [])
    console.log(popularClass);
    return (
        <div>
            <div>
            <h2 className="text-4xl text-extrabold text-center mt-8 text-orange-400 font-extrabold">Our Popular Class</h2>
            </div>
            <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-4" data-aos="flip-left"data-aos-delay="10">

                {
                    popularClass.slice(0, 6).map((item, index) => <SinglePopularClass key={index} item={item}></SinglePopularClass>)
                }
            </div>
        </div>
    );
};

export default PopularClass;