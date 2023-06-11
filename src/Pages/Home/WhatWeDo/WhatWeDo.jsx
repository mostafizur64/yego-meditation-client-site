import { useEffect, useState } from "react";
import SingleWhatWeDo from "./SingleWhatWeDo";

const WhatWeDo = () => {
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
                <h2 className="text-3xl text-center mt-8">What We Do</h2>
            </div>
            {whatWeDo.length}
            <div className=" w-full  grid grid-cols-1 lg:grid-cols-3 gap-4">
              {
                whatWeDo.slice(0,6).map((item,index)=><SingleWhatWeDo key={index} item={item}></SingleWhatWeDo>)
              }
            </div>
        </div>
    );
};

export default WhatWeDo;