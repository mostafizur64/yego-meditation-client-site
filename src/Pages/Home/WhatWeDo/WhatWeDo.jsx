import { useEffect, useState } from "react";
import SingleWhatWeDo from "./SingleWhatWeDo";
import AOS from "aos";

import 'aos/dist/aos.css'
const WhatWeDo = () => {

    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, [])

    const [whatWeDo, setWhatWeDo] = useState([])
    useEffect(() => {
        fetch('/whatwedo.json').
            then(res => res.json())
            .then(data => {
                setWhatWeDo(data)
            })
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-3xl text-center mt-8 text-orange-400">What We Do</h2>
            </div>
         
            <div className=" w-full  grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 "  data-aos="flip-right"data-aos-delay="10">
              {
                whatWeDo.slice(0,6).map((item,index)=><SingleWhatWeDo key={index} item={item}></SingleWhatWeDo>)
              }
            </div>
        </div>
    );
};

export default WhatWeDo;