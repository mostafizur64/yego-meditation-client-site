

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import useAuth from "../../../Hooks/useAuth";

const PopularInstructor = () => {
    const { user } = useAuth()
    const [popularInstructor, setPopularInstructor] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/showPopularClass').
            then(res => res.json())
            .then(data => {
                setPopularInstructor(data)
            })
    }, [])
    return (
        <div>

            {/* <div className="card w-full  shadow-xl grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 p-8 ">
                {
                    popularInstructor.map((instructor, index) => {
                        return <PopularSingleInstructor key={index} instructor={instructor}></PopularSingleInstructor>
                    })
                }
            </div> */}
              <div>
                        <h2 className="text-4xl text-extrabold text-center mt-8 text-orange-400">--- Our Popular Instructor ---</h2>
                    </div>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <>

                  
                    <div>
                   
                        {
                            popularInstructor.map(item => <SwiperSlide key={item._id} className="w-full mt-8">
                                <div className="card   border-2 ">
                                    <figure><img src={user?.photoURL} alt="" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.instructorName}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>

                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>
                </>
            </Swiper>
        </div>
    );
};

export default PopularInstructor;