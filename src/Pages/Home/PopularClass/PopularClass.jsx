
import { useEffect, useState } from "react";

import SinglePopularClass from "./SinglePopularClass";




const PopularClass = () => {
    const [popularClass, setPopularClass] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/showPopularClass').
            then(res => res.json())
            .then(data => {
                setPopularClass(data)
            })
    }, [])
    console.log(popularClass);
    return (
        <div>
            <div>
        <h2 className="text-4xl text-extrabold text-center mt-8 text-orange-400">--- Our Popular Class ---</h2>
            </div>
            <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-4">

                {
                    popularClass.slice(0, 6).map((item, index) => <SinglePopularClass key={index} item={item}></SinglePopularClass>)
                }
            </div>
        </div>
    );
};

export default PopularClass;