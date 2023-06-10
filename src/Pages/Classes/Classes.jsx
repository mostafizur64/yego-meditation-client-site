import { useEffect, useState } from "react";
import SingleClasses from "./SingleClasses";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet-async";


const Classes = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: allClass = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/allClass')
        return res.data;
    })
    // useEffect(() => {
    //     fetch('/yogaclasses.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setClasses(data)
    //         })
    // }, [])
    return (
        <div>
            <Helmet>
                <title>Yoga Meditation | Classes</title>
            </Helmet>
            <div className="card w-full bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 ">
                {
                    allClass.map((item, index) => {
                        return <SingleClasses key={index} item={item}></SingleClasses>
                    })
                }
                <div></div>
            </div>
        </div>
    );
};

export default Classes;